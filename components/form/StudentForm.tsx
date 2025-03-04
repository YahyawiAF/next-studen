import React, { useEffect, useState, useRef } from 'react'
import PagerForm from '../PagerForm'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import Notiflix from 'notiflix'
import moment from 'moment'
import { supabase } from '../../backend/config/database';


function StudentForm({ setPage, row }: any) {
  const [form, setForm] = useState<any>({});
  const [students, setStudents] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const formRef = useRef<any>(null)

  // Fetch students and classes data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch students from Supabase
        const { data: studentData, error: studentError } = await supabase
          .from('students') // 'students' is the table name
          .select('*');
        
        if (studentError) throw new Error(studentError.message);
        setStudents(studentData);

        // Fetch classes from Supabase
        const { data: classData, error: classError } = await supabase
          .from('classes') // 'classes' is the table name
          .select('*');
        
        if (classError) throw new Error(classError.message);
        setClasses(classData);
      } catch (error) {
        Notiflix.Notify.failure('Failed to load data!');
      }
    }

    fetchData();
  }, []);

  // Handle form input change
  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle form submission for creating or updating
  const onSubmit = async (e: any) => {
    e.preventDefault()

    try {
      if (row?.id) {
        // Update student
        const { data, error } = await supabase
          .from('students')
          .update(form)
          .eq('id', row.id);

        if (error) throw new Error(error.message);
        Notiflix.Notify.success('Record updated!');
      } else {
        // Create new student
        const { data, error } = await supabase
          .from('students')
          .insert([form]);

        if (error) throw new Error(error.message);
        Notiflix.Notify.success('Record saved!');
      }

      setTimeout(() => setPage('list'), 200);
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Something went wrong!');
    }
  };

  // Handle cancel
  const onCancel = () => {
    setPage('list')
    setForm({})
    formRef.current.reset();
  }

  // Handle delete student
  const onDelete = async () => {
    if (!row?.id) return;

    try {
      const { data, error } = await supabase
        .from('students')
        .delete()
        .eq('id', row.id);

      if (error) throw new Error(error.message);
      Notiflix.Notify.success('Record deleted!');
      setTimeout(() => setPage('list'), 200);
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Something went wrong!');
    }
  }

  return (
    
      <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
          <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">STUDENT RECORDS</span>
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
                <Input defaultValue={row?.location} name="location" onChange={onChange} label="Location" type="text" placeholder='Location' />
                <Input defaultValue={row?.address} name="address" onChange={onChange} label="Address" type="text" placeholder='Address' />

                <span className="md:flex hidden"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
              </div>
              <div className="space-y-3 flex-1">
                <Input defaultValue={row?.phone} name="phone" onChange={onChange} label="Reachable Phone Number " type="tel" placeholder='Reachable Phone Number' />
                <Input defaultValue={row?.refno} name="refno" onChange={onChange} label="Student ID" type="text" placeholder='Student ID' />
                <Select label="student" defaultValue={row?.student_id} name="student_id" onChange={onChange}>
                  <option disabled selected>-- Choose --</option>
                  {/* {helper && helper.data && helper.data.student.map((r: any, i: React.Key) => <option key={i} value={r.id}>{r.refno} - {r.lname}, {r.fname} {r.mname}</option>)} */}
                </Select>
                <Select label="Class Group" defaultValue={row?.class_id} name="class_id" onChange={onChange}>
                  <option disabled selected>-- Choose --</option>
                </Select>
                <Select label="School Feeding Enrolled" defaultValue={row?.feed_member} name="feed_member" onChange={onChange}>
                  <option disabled selected>-- Choose --</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Select>
                <Select label="School Bus Enrolled" defaultValue={row?.bus_member} name="bus_member" onChange={onChange}>
                  <option disabled selected>-- Choose --</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Select>
                <Input defaultValue={row.doa ? moment(row.doa).format('YYYY-MM-DD') : null} name="doa" onChange={onChange} label="Date of Admission" type="date" placeholder='Date of Admission' />
                <span className="md:hidden flex"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}
export default StudentForm