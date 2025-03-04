import React from 'react'

import Classe from '../public/classroom.svg'
import Event from '../public/event (2).svg'
import Contact from '../public/contact.svg'
import Club from '../public/Club.svg'
import subject from '../public/subject.svg'
import Calendar from '../public/calendar.svg'
import Logo from '../public/Logo.svg'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'

function Sidebar() {
  return (
    <div className="relative p-2 w-1/4 hidden md:flex bg-[rgb(231,168,50)]">
      <div className="overflow-y fixed w-[19%] h-screen flex flex-col space-y-6">
        <div className="relative flex items-center justify-center  bg-yellow-80/80 rounded-md">
          {<img src={Logo.src} className="mx-2 my-2 h-[80px] rounded-lg" /> }
        </div>
        <div className="h-[32.2rem] space-y-2 overflow-scroll scrollbar-hide">
            <DashNav title="Dashboard"  icon={"dashboard.svg"} link="/studash"/>
            <DashNav title="Teacher" icon={"professor.svg"} link="/teacher"/>
            <DashNav title="Student"  icon={"student (3).svg"} link="/student "/>
            <DashNav title="Classes"  icon={"classroom.svg"} link="/classes"/>
            <DashNav title="subject"  icon={"subject.svg"} link="/subject"/>
            <DashNav title="Event"  icon={"event (2).svg"} link="#"/>
            <DashNav title="Club"  icon={"Club.svg"}  link="#"/>
            <DashNav title="Calendar"  icon={"calendar.svg"} link="/calendar" />
            <DashNav title="Contatct"  icon={"contact.svg"} link="#" />
        </div>
        <div className="absolute bottom-8 w-[90%] mx-1 border-t border-white/10">
            <Logout title="Sign out" />
        </div>
      </div>
    </div>
  )
}
export default Sidebar