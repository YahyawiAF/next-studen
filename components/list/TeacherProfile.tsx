import React, { useState, useEffect, Fragment } from 'react'
import { Tab } from '@headlessui/react'

import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import TransactionSnip from '../snippet/TransactionSnip';
import AttendanceSnip from '../snippet/AttendanceSnip';
import BillSnip from '../snippet/BillSnip';
import moment from 'moment';

function teacherProfile({ setPage, setRow, id }: any) {
    const [vpage, setVpage] = useState(1)
    const [keyword, setKeyword] = useState("")
    //const { admin } = useUserStore((state) => state);
    //useUserStore.setState({ eid: id,ename: name })
    const { data, error } = useSWR(`/api/teacher?studinfo=${id}`, fetcher)
    //const { teacher } = data?.data;
    console.log(`/api/teacher?studinfo=${id}`, data, error)


    const viewRecord = (id: string) => { }
    const deleteRecord = (id: string) => { }

    return (
        <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
            <div className="p-4 bg-blue-50/20 border-2 border-[#228e9d] rounded-lg w-full md:w-96 shadow-lg shadow-yellow-800/20">
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
                    <div className="w-full md:w-36 text-sm font-circular">First Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.fname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Middle Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.mname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Last Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.lname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Date of Birth:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{moment(data?.data?.teacher?.dob).format('MMMM DD, YYYY').toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Location:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.location?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Phone:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.phone?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Address:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.address?.toUpperCase()}</div>
                </div>
                {/* Academic */}
                <div className="my-3 flex">
                    <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">ACADEMIC</h3>
                    <span className="flex-1 border-b-2"></span>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher ID:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.refno?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Class Group:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.class?.name?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Date of Admission:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{moment(data?.data?.teacher?.doa).format('MMMM DD, YYYY').toUpperCase()}</div>
                </div>
                {/* Academic */}
                <div className="my-3 flex">
                    <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">SERVICES</h3>
                    <span className="flex-1 border-b-2"></span>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">School Bus:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.bus_member ? 'REGISTERED' : 'NO '}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">School Feeding:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.feed_member ? 'REGISTERED' : 'NO '}</div>
                </div>

                {/* Guardian */}
                <div className="my-3 flex">
                    <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400"></h3>
                    <span className="flex-1 border-b-2"></span>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher First Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.fname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher Middle Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.mname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher Last Name:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.lname?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Occupation:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.occupation?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Location:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.location?.toUpperCase()}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Phone:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.phone?.toUpperCase()}</div>
                </div>
                {/* Academic */}
                <div className="my-3 flex">
                    <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">LOGIN CREDENTIALS</h3>
                    <span className="flex-1 border-b-2"></span>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher Reference:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.refno}</div>
                </div>
                <div className="my-2 flex">
                    <div className="w-36 text-sm font-circular">Teacher Password:</div>
                    <div className="flex-1 text-sm font-circular text-[#228e9d]">{data?.data?.teacher?.teacher?.password}</div>
                </div>
            </div>
            <div className="p-4 bg-blue-50/20 border-2 border-[#228e9d] rounded-lg flex-1">
                <Tab.Group>
                    <Tab.List className="w-full h-10 text-sm text-[#228e9d] tracking-widest font-circular bg-white rounded-lg flex justify-between space-x-1 overflow-hidden">
                        <Tab as={Fragment}>
                            {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10' : 'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>TRANSACTIONS</div>)}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10' : 'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>ATTENDANCES</div>)}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10' : 'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>BILLS & INVOICES</div>)}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="my-6">
                        <Tab.Panel>
                            <TransactionSnip />
                        </Tab.Panel>
                        <Tab.Panel>
                            <AttendanceSnip />
                        </Tab.Panel>
                        <Tab.Panel>
                            <BillSnip />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                {/* Transactions */}
                {/* Attendance */}
                {/*  */}

                {/*  */}
            </div>
        </div>

    )
}
export default teacherProfile
