import React, { useEffect, useState, useRef } from 'react'
import PagerForm from '../PagerForm'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import useSWR from 'swr'
import Notiflix from 'notiflix'
import moment from 'moment'
import { supabase } from '../../backend/config/database';



function ClasseForm({ setPage, row }: any) {
    const [form, setForm] = useState({});
    const formRef = useRef<any>(null)
    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            if (row.id <= 0 && form && Object.keys(form).length == 0) throw new Error("NO DATA PROVIDED!")
            const res = await postClass({ ...form, id: row.id });
            if (res.success) {
                // Do something if passed
                Notiflix.Notify.success('RECORD SAVED!');
                setTimeout(() => setPage('list'), 200)
            } else {
                // Show error messages0
                Notiflix.Notify.failure('SAVING FAILED!');
            }
        } catch (e) {
            console.log(e)
            // Show error messages
            Notiflix.Notify.failure('SOMETHING IS WRONG!');
        }
    };

    const onCancel = () => {
        setPage('list')
        setForm({})
        formRef.current.reset();
    }

    return (
        <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
            <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
                <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">Classes</span>
                <PagerForm setPage={setPage} onSubmit={onSubmit} onCancel={onCancel} />
            </div>
            <div className="w-full">
                <form onSubmit={onSubmit} ref={formRef}>
                    <div className="p-4 border rounded bg-yellow-50/20 w-full flex flex-col md:flex-row md:space-x-6">
                        <div className="space-y-3 flex-1">
                            <Input defaultValue={row?.fname} name="name" onChange={onChange} label=" Name" type="text" placeholder=' Name' />
                            <Input defaultValue={row.startdate ? moment(row.startdate).format('YYYY-MM-DD') : null} name="startdate" onChange={onChange} label="start date" type="date" placeholder='Start date' />
                            <Input defaultValue={row.enddate ? moment(row.enddate).format('YYYY-MM-DD') : null} name="enddate" onChange={onChange} label="End Date" type="date" placeholder='End date' />
                            <span className="md:flex hidden"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
                        </div>
                        <div className="space-y-3 flex-1">
                            <Input defaultValue={row?.teachname} name="teachname" onChange={onChange} label="Teacher in charge " type="text" placeholder='Teacher in charge' />
                            <Input defaultValue={row.acadyear ? moment(row.acadyear).format('YYYY') : null} name="acadyear" onChange={onChange} label="Acadamic year" type="date" placeholder='Acadamic year' />
                            <span className="md:hidden flex"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ClasseForm