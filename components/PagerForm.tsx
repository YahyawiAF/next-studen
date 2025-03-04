import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import { MdAddCircleOutline, MdKeyboardArrowRight, MdKeyboardArrowLeft, MdSave, MdCancel } from 'react-icons/md'
import { useUserStore } from '../utils/store';

export default function PagerForm({ onSubmit, setPage, onCancel }: any) {
   const router = useRouter()
   const cancel = () => {
      setPage('list')
   }

   return (
      <div className="border-t md:border-t-0 md:border-l px-3 py-3 sm:py-0 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between">
         <div className="flex justify-between sm:space-x-4 sm:px-0 md:mr-2 my-2 px-2 py-[0.1rem] ">
            <div className="p-1 flex space-x-1">

               <button onClick={() => setPage('create')} className="rounded bg-[#000131] text-slate-50 text-xs">
                  <span className="px-3 h-6  font-semibold text-slate-50">CANCEL</span>
               </button>

               <button onClick={onSubmit} className="px-4 py-1 flex items-center space-x-2 rounded bg-green-100 text-slate-600 text-xs border border-slate-300">
                  <MdSave className="h-6 w-6 text-[#000131]" />
               </button>
               {/*<button className="px-2 py-2 rounded-md bg-slate-50 text-slate-600 text-xs font-semibold border">Page {pageNo}</button>*/}
               <button onClick={onCancel} className="px-4 py-1 rounded bg-red-100 text-slate-600 text-xs font-semibold border border-slate-300">
                  <MdCancel className="h-6 w-6 text-[#000131]" />
               </button>
            </div>
         </div>
      </div>
   )
}
