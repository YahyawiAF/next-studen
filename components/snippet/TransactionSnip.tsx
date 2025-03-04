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

function TransactionSnip({ studentId }: any) {
   const [ vpage,setVpage ] = useState(1)
   const [ keyword,setKeyword ] = useState("")
   //const { admin } = useUserStore((state) => state);
   //useUserStore.setState({ eid: id,ename: name })
   //const { data } = useSWR(`/api/transact?page=${vpage-1}&studentId=${studentId}`, fetcher)
   
    const viewRecord = (id:string) => {}
    const deleteRecord = (id:string) => {}
  
  return (
    <div className="p-4 w-full border rounded-lg">
          <table className="w-full border-collapse grid border-spacing-4 md:text-center">
                <tr className={`hidden md:grid md:grid-cols-5 bg-[#f9f5f1] font-bold text-yellow-900 text-sm tracking-wide rounded-lg mb-4 px-2 py-1`}>
                   <td className="p-1 px-2">Trasact ID</td>
                   <td className="p-1 px-2">Transact Type</td>
                   <td className="p-1 px-2">Amount</td>
                   <td className="p-1 px-2">Date</td>
                   <td className="p-1 px-2  md:text-center">&nbsp;</td>
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
                      <div className="px-2 py-1 indent-4 md:indent-0">School Fees</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Location</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">3000.00</div>
                   </td>
                   <td className="md:p-1 md:px-2">
                      <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Phone</span>
                      <div className="px-2 py-1 indent-4 md:indent-0">3-APR-2022</div>
                   </td>
                   <td className="md:p-1 md:px-2 md:text-center border-b-2 md:border-none border-dashed border-yellow-900/90">
                      <span className="mb-2 md:0 px-2 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-600/80">Action Menu</span>
                      <Menu as="div" className="z-1 indent-6 md:indent-0 mb-4 md:0 relative">
                         <Menu.Button className="relative px-2 py-1 border-2 rounded">
                            <TfiMenuAlt  className="z-20 h-4 w-4 text-gray-600/70"/>
                            <Menu.Items as="div" className="z-10 absolute top-6 -left-0.5 md:-right-0.5 w-28 py-2 flex flex-col text-yellow-900/90 bg-white drop-shadow-sm border-2 rounded-bl rounded-br rounded-tl text-md text-gray-500 divide-y-2">
                               <Menu.Item as="button" onClick={() => viewRecord('')} className="py-1 px-2 pl-3 flex space-x-4 items-center">
                                  <AiOutlineFolderView />
                                  <span>Receipt</span>
                               </Menu.Item>
                            </Menu.Items>
                         </Menu.Button>
                      </Menu>
                   </td>
                   </>
                </tr>
                {/*))*/}
          </table>
        </div>
   
  )
}
export default TransactionSnip
