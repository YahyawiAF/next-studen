import React, { useEffect, useState, useRef } from 'react'
import PagerForm from '../PagerForm'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import useSWR from 'swr';
import Notiflix from 'notiflix';
import moment from 'moment';
import { supabase } from '../../backend/config/database';



function TeacherForm({ setPage, row }: any) {
    const [form, setForm] = useState({});
    const formRef = useRef<any>(null);
    const [keyword, setKeyword] = useState(''); 
    const [vpage, setVpage] = useState(1); 

    const { data: teacherData, error } = useSWR(
        row?.id ? `/teachers/${row.id}` : null,
        async () => {
            const { data, error } = await supabase
                .from('teachers')
                .select('*')
                .eq('id', row.id)
                .single();
            if (error) throw error;
            return data;
        }
    );

    // Remplir le formulaire avec les données existantes
    useEffect(() => {
        if (teacherData) {
            setForm(teacherData);
        }
    }, [teacherData]);

    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (row?.id) {
                const { data, error } = await supabase
                    .from('teachers')
                    .update(form)
                    .eq('id', row.id);
                if (error) throw error;
                Notiflix.Notify.success('Record Updated!');
            } else {
                const { data, error } = await supabase
                    .from('teachers')
                    .insert([form]);
                if (error) throw error;
                Notiflix.Notify.success('Record Saved!');
            }
            setTimeout(() => setPage('list'), 200);
        } catch (e) {
            console.error(e);
            Notiflix.Notify.failure('Something went wrong!');
        }
    };

    const onCancel = () => {
        setPage('list');
        setForm({});
        formRef.current.reset();
    };

    const onDelete = async () => {
        try {
            const { data, error } = await supabase
                .from('teachers')
                .delete()
                .eq('id', row.id);
            if (error) throw error;
            Notiflix.Notify.success('Teacher Deleted!');
            setTimeout(() => setPage('list'), 200);
        } catch (e) {
            console.error(e);
            Notiflix.Notify.failure('Delete Failed!');
        }
    };
    return (
        <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
            <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
                <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#EF6F6C] font-arial">TEACHER RECORDS</span>
                <PagerForm setPage={setPage} onSubmit={onSubmit} onCancel={onCancel} />
            </div>
            <div className="w-full">
                <form onSubmit={onSubmit} ref={formRef}>
                    <div className="p-4 border rounded bg-yellow-50/20 w-full flex flex-col md:flex-row md:space-x-6">
                        <div className="space-y-3 flex-1">
                            <Input defaultValue={row?.fname} name="fname" onChange={onChange} label="First Name" type="text" placeholder='First Name' />
                            <Input defaultValue={row?.mname} name="mname" onChange={onChange} label="Middle Name" type="text" placeholder='Middle Name' />
                            <Input defaultValue={row?.lname} name="lname" onChange={onChange} label="Last Name" type="text" placeholder='Last Name' />
                            <Input defaultValue={row.dob ? moment(row.dob).format('YYYY-MM-DD') : null} name="dob" onChange={onChange} label="Date of Birth" type="date" placeholder='Date of Birth' />
                            <Select defaultValue={row?.gender} name="gender" onChange={onChange} label="Gender">
                                <option disabled selected>-- Choose --</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </Select>
                            
                            <span className="md:flex hidden"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
                        </div>
                        <div className="space-y-3 flex-1">
                        <Input defaultValue={row?.location} name="location" onChange={onChange} label="Location" type="text" placeholder='Location' />
                        <Input defaultValue={row?.address} name="address" onChange={onChange} label="Address" type="text" placeholder='Address' />
                            <Input defaultValue={row?.phone} name="phone" onChange={onChange} label="Reachable Phone Number " type="tel" placeholder='Reachable Phone Number' />
                            <Input defaultValue={row?.refno} name="refno" onChange={onChange} label="Teacher ID" type="text" placeholder='Teacher ID' />
                            {/* <Select label="Class Group" defaultValue={row?.class_id} name="class_id" onChange={onChange}>
                                <option disabled selected>-- Choose --</option>
                                {helper && helper.data && helper.data.class.map((r: any, i: React.Key) => <option key={i} value={r.id}>{r.name}</option>)}
                            </Select> */}
                            <Input defaultValue={row.doa ? moment(row.doa).format('YYYY-MM-DD') : null} name="doa" onChange={onChange} label="Date of Admission" type="date" placeholder='Date of Admission' />
                            <span className="md:hidden flex"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TeacherForm