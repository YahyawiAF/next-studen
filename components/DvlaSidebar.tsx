import React from 'react'
import Logo from '../public/image.webp'
//import { MdOutlineSpaceDashboard } from 'react-icons/md'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'

function DvlaSidebar() {
  return (
    <div className="relative p-2 w-1/4 hidden md:flex bg-green-700">
      <div className="overflow-y fixed w-[19%] h-screen flex flex-col space-y-6 ">
        <div>
            <img src={Logo.src} className="mx-2 mt-2 w-[100px] h-[100px]" />
        </div>
        <div className="space-y-2">
            <DashNav title="Dashboard" active />
            <DashNav title="Halls" />
            <DashNav title="Rooms" />
            <DashNav title="Occupants" />
            <DashNav title="Reservations" />
            <DashNav title="Requests" />
            <DashNav title="Accomodation Sessions" />
            <DashNav title="User accounts" />
            <DashNav title="System Reports" />
        </div>
        <div className="absolute bottom-8 w-[90%] mx-1 border-t border-white/10">
            <Logout title="Sign out" />
        </div>
      </div>
    </div>
  )
}

export default DvlaSidebar