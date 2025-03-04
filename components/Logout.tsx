import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'

type Props = {
  title: string;
  active: boolean | undefined | any
}

function Logout({ title, active = undefined }: any) {
  return (
    <div className={`px-1 pt-3 w-full h-16 flex items-center space-x-3 ${active ? 'bg-white/10 border-r-[6px] ' : ''} tansition-all duration-150 hover:bg-white/10 border-white rounded cursor-pointer`}>
      <RiLogoutCircleLine className={`w-6 h-6 text-white`} />
      <span className={`text-[0.9rem] font-medium text-white`}>{title}</span>
    </div>
  )
}

export default Logout