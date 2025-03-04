import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import { MdAddCircleOutline, MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { useUserStore } from '../utils/store';
export default function PagerList({ onChange, onSubmit, keyword, setPage, setRow }: any) {
    const router = useRouter()
    const prevPage = () => {
    }
    const nextPage = () => {
    }
    return (
        <div className="border-t md:border-t-0 md:border-l px-3 py-3 sm:py-0 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between">
            <SearchBox onChange={onChange} onSubmit={onSubmit} value={keyword} />
            <div className="flex justify-between sm:space-x-4 px-4 sm:px-0">
                <button onClick={() => { setPage('create'); setRow({ id: 0 }) }} className="p-1 flex items-center justify-center rounded-full bg-white text-xs font-semibold border border-slate-300">
                    <MdAddCircleOutline className="h-6 w-6 text-[#000131]" />
                </button>
                <div className="flex space-x-1">
                    {/*
                <button onClick={() => setPage('create')}  className="rounded bg-[#000131] text-slate-50 text-xs">
                <span className="px-3 h-6  font-semibold text-slate-50">CREATE</span>
                </button>
                */}
                    <button onClick={prevPage} className="rounded bg-blue-50 text-slate-600 text-xs border border-slate-300">
                        <MdKeyboardArrowLeft className="h-6 w-6 text-[#000131]" />
                    </button>
                    {/*<button className="px-2 py-2 rounded-md bg-slate-50 text-slate-600 text-xs font-semibold border">Page {pageNo}</button>*/}
                    <button onClick={nextPage} className="rounded bg-blue-50 text-slate-600 text-xs font-semibold border border-slate-300">
                        <MdKeyboardArrowRight className="h-6 w-6 text-[#000131]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
