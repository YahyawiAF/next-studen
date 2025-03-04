import React from 'react'
import Logo from '../public/image.webp'
import Bg from '../public/login-background.jpg'
import {FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'

function DvlaLoginSideBar() {
  return (
    <div className="relative w-[30%] h-full hidden md:flex flex-col justify-between bg-green-900 font-circular">
        <img src={Bg.src} className="absolute z-2 w-full h-screen object-cover object-left opacity-30 blur-[5%] mix-blend-screen"/>
        <div className="p-8 z-10 flex flex-col text-white space-y-6 font-circular">
          <img src={Logo.src} className="w-20 h-20 object-contain"/>
          <h1 className="text-3xl font-bold font-circular">Welcome to <br/>DVLA - NSS Portal</h1>
          <p className="font-circular">Track your NSS posting applications.</p>
        </div>
        <div className="px-10 py-0 z-10 w-full h-[5.25rem] flex flex-row items-center justify-between bg-green-600 text-white">
        <Link href="#">
            <span>Don't have an account? <span className="font-circular">Sign Up</span></span>
        </Link>
        <FaChevronRight className="w-4 h-4  "/>
        </div>
    </div>
  )
}

export default DvlaLoginSideBar