import React, { useEffect, useState, useRef } from 'react'
import PagerForm from '../PagerForm'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import useSWR from 'swr'
import { fetcher, postCalendar } from '../../utils/apiClient'
import Notiflix from 'notiflix'
import moment from 'moment'


function CalendarForm({ setPage, row }: any) {
  const [form, setForm] = useState({});
  const formRef = useRef<any>(null)
  const { data: helper } = useSWR(`/api/helper`, fetcher)
  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      if (row.id <= 0 && form && Object.keys(form).length == 0) throw new Error("NO DATA PROVIDED!")
      const res = await postCalendar({ ...form, id: row.id });
      if (res.success) {
        // Do something if passed
        Notiflix.Notify.success('RECORD SAVED!');
        setTimeout(() => setPage('list'), 200)
      } else {
        // Show error messages
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
        <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">STUDENT RECORDS</span>
        <PagerForm setPage={setPage} onSubmit={onSubmit} onCancel={onCancel} />
      </div>
      <div className="w-full">
        <form onSubmit={onSubmit} ref={formRef}>
          <div className="p-4 border rounded bg-yellow-50/20 w-full flex flex-col md:flex-row md:space-x-6">
            <div className="space-y-3 flex-1">
              <Input defaultValue={row?.name} name="name" onChange={onChange} label="Calendar Name" type="text" placeholder='Calendar Name' />
              <Input defaultValue={row?.year} name="year" onChange={onChange} label="Calendar Year" type="text" maxLength={4} placeholder='Calendar Year' />
              <Input defaultValue={row?.term} name="term" onChange={onChange} label="Academic Term" type="text" maxLength={1} placeholder='Last Name' />
              <Select defaultValue={row?.default} name="default" onChange={onChange} label="Default Calendar">
                <option disabled selected>-- Choose --</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Select>
              <span className="md:flex hidden"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
            </div>
            <div className="space-y-3 flex-1">
              <Input defaultValue={row.period_start ? moment(row.period_start).format('YYYY-MM-DD') : null} name="period_start" onChange={onChange} label="Academic Start Period" type="date" placeholder='Academic Start Period' />
              <Input defaultValue={row.period_end ? moment(row.period_end).format('YYYY-MM-DD') : null} name="period_end" onChange={onChange} label="Academic End Period" type="date" placeholder='Academic End Period' />
              <Select defaultValue={row?.status} name="status" onChange={onChange} label="Active Status">
                <option disabled selected>-- Choose --</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Select>
              <span className="md:hidden flex"><Button label="SAVE" type="submit" position="right" onClick={() => null} /></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CalendarForm