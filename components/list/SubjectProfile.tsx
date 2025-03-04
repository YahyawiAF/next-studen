import React,{useState,useEffect,Fragment} from 'react'
import { Tab } from '@headlessui/react'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import moment from 'moment';

function SubjectProfile({ setPage,setRow,id }: any) {
   const { data,error } = useSWR(`/api/subject?profile=${id}`, fetcher)
   console.log(data,error)
   return (
      data ?
      <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
         <div className="p-4 bg-blue-50/20 border-2 border-[#228e9d] rounded-lg w-full md:w-max-md shadow-lg shadow-[#228e9d]">
            {/* Photo */}
            <div className="mb-6 p-6 relative overflow-hidden w-full flex items-center justify-center border-2 border-blue-100/40 rounded-lg bg-blue-50/60">
               <Image 
                  src={`https://ehub.ucc.edu.gh/api/photos/?tag=15666`}
                  alt="Profile Picture"
                  width={200}
                  height={50}
                  style={{
                     objectFit: "cover",
                     borderRadius: 15,
                  }} 
               />
            </div>
            {/* Personal */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">PERSONAL</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Name:</div>
               <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.Subject?.fname?.toUpperCase()}</div>
            </div>
            {data?.data?.student?.map((r:any,i:number)=> (
            <div className="my-2 flex flex-col md:flex-row" key={i}>
               <div className="w-full md:w-36 text-sm font-circular">#{i+1} Ward Name:</div>
               <div className="flex-1 text-sm font-circular text-[#228e9d]">{r.lname}, {r.fname} {r.mname}<br/><small className="text-gray-800"><em> -- {r.refno}&nbsp;&nbsp;  ( { r.class?.name } )</em></small></div>
            </div>
            ))}
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Subject Reference ID:</div>
               <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.subject?.refno}</div>
            </div>
            
         </div>
      </div>
      : null
)
}
export default SubjectProfile
