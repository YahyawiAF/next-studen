import React,{useState,useEffect} from 'react'
import {FiUpload} from 'react-icons/fi'
import {TfiMenuAlt} from 'react-icons/tfi'
import { Menu } from '@headlessui/react'
import PagerList from '../PagerList'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import moment from 'moment'
import { FaUserEdit } from 'react-icons/fa'
import { AiOutlineFolderView } from 'react-icons/ai'

function AttendanceSnip({ studentId }: any) {
   const [ vpage,setVpage ] = useState(1)
   const [ keyword,setKeyword ] = useState("")
   //const { admin } = useUserStore((state) => state);
   //useUserStore.setState({ eid: id,ename: name })
   //const { data } = useSWR(`/api/attendance?page=${vpage-1}&studentId=${studentId}`, fetcher)
   const onChange = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
    }
  
    const onSubmit = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
    }

    const viewRecord = (id:string) => {}
    const deleteRecord = (id:string) => {}
  
  return (
    <div className="p-4 w-full border rounded-lg">
          <table className="w-full border-collapse grid border-spacing-4 md:text-center">
                <tr className={`hidden md:grid md:grid-cols-5 bg-[#f9f5f1] font-bold text-yellow-900 text-sm tracking-wide rounded-lg mb-4 px-2 py-1`}>
                   <td className="p-1 px-2">Attend ID</td>
                   <td className="p-1 px-2">Period</td>
                   <td className="p-1 px-2">Time In</td>
                   <td className="p-1 px-2">Time Out</td>
                   <td className="p-1 px-2">Picked By</td>
                </tr>
               {/* data && data.data && data.data.data?.map((row:any,i:React.Key) => ( */}
                <tr key={0} className={`grid md:grid-cols-5 text-gray-900 text-[0.81rem] font-normal font-circular rounded-md px-2 py-1 divide-y-3 border-b-2 border-slate-50`}>
                   <>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Student ID</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">4132927</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Student Name</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">MON, AUG 3, 2022</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Location</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">7:00 AM</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Phone</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">4:30 PM</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Phone</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">Arthur, Jones - 0277675089</div>
                   </td>
                   </>
                </tr>
                {/*))*/}
          </table>
        </div>
   
  )
}
export default AttendanceSnip
