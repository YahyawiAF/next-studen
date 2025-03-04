import React from 'react'
import { FiUpload } from 'react-icons/fi'
import { useRouter } from 'next/router'

function MenuCard({ title,desc,Icon,link_text,link = null }: any) {
  const history = useRouter()
  return (
    <div className="px-4 py-6 flex-1 flex flex-col justify-between border sm:border-none rounded-lg bg-white">
        <div className="my-2">
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-600/5 rounded-full">
          <Icon className="w-5 h-5 text-[#000131]" />
          </div>
          <h3 className="font-bold font-arial text-[#228e9d]">{title}</h3>
          <p className="text-slate-500 font-medium">{desc}</p>
        </div>
        { link && <button onClick={() => history.push(link) } className="p-4 py-3 w-full bg-[#228e9d] text-white font-bold rounded-lg">{link_text}</button> }
    </div>
  )
}

export default MenuCard