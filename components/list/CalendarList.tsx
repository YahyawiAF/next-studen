import React,{useState,useEffect} from 'react'
import {FiUpload} from 'react-icons/fi'
import {TfiMenuAlt} from 'react-icons/tfi'
import { Menu } from '@headlessui/react'
import PagerList from '../PagerList'
import { deleteCalendar, fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import moment from 'moment'
import { FaUserEdit } from 'react-icons/fa'
import { AiOutlineFolderView } from 'react-icons/ai'
import Modal from '../Modal'
import StudentProfile from './StudentProfile'
import Notiflix from 'notiflix'

function CalendarList({ setPage,setRow }: any) {
   const [ vpage,setVpage ] = useState(1)
   const [ keyword,setKeyword ] = useState("")
   const [openModal, setOpenModal ] = useState(false)
   const [eid, setEid ] = useState<any>(0)
   
   //const { admin } = useUserStore((state) => state);
   //useUserStore.setState({ eid: id,ename: name })
   //const { trigger } = useSWR('/api/user', sendFetcher);   onClick=()=> trigger({ username: 'johndoe' });
   const { data,mutate } = useSWR(keyword ? `/api/calendar?page=${vpage-1}&keyword=${keyword}`: `/api/calendar?page=${vpage-1}`, fetcher)
  

   const onChange = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
   }
  
   const onSubmit = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
   }

   const editRecord = (id:string) => {
      setPage('edit')
      const dt = data && data.data && data.data.data?.find((m:any) => m.id === id)
      setRow({ ...dt })
   }

   const viewRecord = (id:string) => {
      setEid(id)
      setOpenModal(true)
   }

    const deleteRecord = async (id:string) => {
       try{
         const res = await deleteCalendar(id);
         if(res.success){
            Notiflix.Notify.success("Record Deleted!")
            mutate()
         }
       } catch(e){
         console.log(e)
       }
    }
  
  return (
    <>
    { eid > 0 ?
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
         <StudentProfile id={eid} />
      </Modal> 
      : null
    }
      
    <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
        <div className="z-10 w-full sticky top-20  md:relative md:top-0 flex flex-col md:flex-row items-center justify-between bg-white md:bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
           <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">ACADEMIC CALENDAR</span>
           <PagerList onChange={onChange} onSubmit={onSubmit} keyword={keyword} setPage={setPage} setRow={setRow} />
        </div>
        <div className="w-full">
          <table className="w-full border-collapse grid border-spacing-4 md:text-center">
                <tr className={`hidden md:grid md:grid-cols-6 bg-[#f9f5f1] font-bold text-yellow-900 text-sm tracking-wide rounded-lg mb-4 px-2 py-1`}>
                   <td className="p-1 px-2">Calendar ID</td>
                   <td className="p-1 px-2">Calendar Name</td>
                   <td className="p-1 px-2">Calendar Year</td>
                   <td className="p-1 px-2">Term</td>
                   <td className="p-1 px-2">Period</td>
                   <td className="p-1 px-2  md:text-center">&nbsp;</td>
                </tr>
                { data && data.data && data.data.data?.map((row:any,i:React.Key) => (
                <tr key={i} className={`grid md:grid-cols-6 text-gray-900 text-[0.81rem] font-normal font-circular rounded-md px-2 py-1 divide-y-3 border-b-2 border-slate-50`}>
                   <>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Calendar ID</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">{row.id}</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Calendar Name</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">{row.name} </div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Calendar Year</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">{row.year}</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Term</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">{row.term}</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Period</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">
                        <small className="text-green-900">STARTS: { moment(row.period_start).format('MMMM DD, YYYY').toUpperCase() }</small><br/>
                        <small className="text-red-900">ENDS: { moment(row.period_end).format('MMMM DD, YYYY').toUpperCase() }</small>
                      </div>
                   </td>
                   <td className="md:p-1 md:px-2 md:text-center border-b-2 md:border-none border-dashed border-yellow-900/90">
                      <span className="mb-2 md:0 px-2 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-600/80">Action Menu</span>
                      <Menu as="div" className="z-1 indent-6 md:indent-0 mb-4 md:0 relative">
                         <Menu.Button className="relative px-2 py-1 border-2 rounded">
                            <TfiMenuAlt  className="z-20 h-4 w-4 text-gray-600/70"/>
                            <Menu.Items as="div" className="z-10 absolute top-6 -left-0.5 md:-right-0.5 w-28 py-2 flex flex-col text-yellow-900/90 bg-white drop-shadow-sm border-2 rounded-bl rounded-br rounded-tl text-md text-gray-500 divide-y-2">
                               <Menu.Item as="button" onClick={() => editRecord(row.id)} className="py-1 px-2 pl-3 flex space-x-4 items-center">
                                  <FaUserEdit />
                                  <span>Edit</span>
                               </Menu.Item>
                               <Menu.Item as="button" onClick={() => deleteRecord(row.id)} className="py-1 px-2 pl-3 flex space-x-4 items-center">
                                  <FiUpload />
                                  <span>Delete</span>
                               </Menu.Item> {/**/}
                            </Menu.Items>
                         </Menu.Button>
                      </Menu>
                   </td>
                   </>
                </tr>
                ))}
          </table>
        </div>
    </div>
    </>
  )
}
export default CalendarList
