import React, { useState, useEffect, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import moment from 'moment';

function ClassProfile({ setPage, setRow, id }: any) {
    const { data, error } = useSWR(`/api/class?profile=${id}`, fetcher)
    console.log(data, error)
    return (
        data ?
            <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
                <div className="p-4 bg-blue-50/20 border-2 border-[#228e9d] rounded-lg w-full md:w-max-md shadow-lg shadow-[#228e9d]">
                    {/* Photo */}
                    <div className="mb-6 p-6 relative overflow-hidden w-full flex items-center justify-center border-2 border-blue-100/40 rounded-lg bg-blue-50/60">

                    </div>
                    <div className="my-3 flex">
                        <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">Class</h3>
                        <span className="flex-1 border-b-2"></span>
                    </div>
                    <div className="my-2 flex flex-col md:flex-row">
                        <div className="w-full md:w-36 text-sm font-circular">Name:</div>
                        <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.class?.fname?.toUpperCase()}</div>
                    </div>
                    <div className="my-2 flex flex-col md:flex-row">

                    <div className="my-2 flex flex-col md:flex-row">
                        <div className="w-full md:w-36 text-sm font-circular">Start date:</div>
                        <div className="flex-1 text-sm font-circular text-[#228e9d]">{moment(data?.data?.class?.startdate).format('MMMM DD, YYYY').toUpperCase()}</div>
                    </div>
                        <div className="w-full md:w-36 text-sm font-circular">Start date:</div>

                        {/* /////////////////////HEDHMCH METAKDA MNHA  5{moment(data?.data?.class?.enddate)///////////////////////// */}
                        
                        <div className="flex-1 text-sm font-circular text-[#228e9d]">{moment(data?.data?.class?.enddate).format('MMMM DD, YYYY').toUpperCase()}</div>
                    </div>
                    <div className="my-2 flex flex-col md:flex-row">
                        <div className="w-full md:w-36 text-sm font-circular">Teacher in charge:</div>
                        <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.class?.teachname?.toUpperCase()}</div>
                    </div>
                    <div className="my-2 flex flex-col md:flex-row">
                    <div className="w-full md:w-36 text-sm font-circular">Academic year:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{moment(data?.data?.class?.acadyear).format('YYYY').toUpperCase()}</div>
                    </div>
                    {data?.data?.student?.map((r: any, i: number) => (
                        <div className="my-2 flex flex-col md:flex-row" key={i}>
                            <div className="w-full md:w-36 text-sm font-circular">#{i + 1} Ward Name:</div>
                            <div className="flex-1 text-sm font-circular text-[#228e9d]">{r.lname}, {r.fname} {r.mname}<br /><small className="text-gray-800"><em> -- {r.refno}&nbsp;&nbsp;  ( {r.class?.name} )</em></small></div>
                        </div>
                    ))}
                </div>
            </div>
            : null
    )
}
export default ClassProfile
