import React from 'react'
import Logo from '../public/image.webp'
import Button from './Button'
import Input from './Input'
import PhoneInput from './PhoneInput'
import Select from './Select'

function DvlaLoginContent() {
  return (
    <div className="px-10 md:px-20 md:py-16 h-full min-h-screen flex-1 flex flex-col space-y-10 bg-[#fbf9f9]">
      <div className="space-y-3">
        <img src={Logo.src} className="w-20 h-20 flex md:hidden object-contain"/>
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-gray-500/90 font-medium font-circular">Provide your account information continue</p>
      </div>
      <div>
        <form className="space-y-3">
          <Input label="Your Email Address" type="text" placeholder='Eg. someone@gmail.com' />
          <Input label="Enter Password" type="password" placeholder='Enter Password' />
          <Select label="Password" type="password" placeholder='Password'>
              <option className="p-10 bg-red-300">John</option>
              <option>Ama</option>
          </Select>
          <PhoneInput label="Phone Number" type="tel" placeholder='Enter Phone Number'/>
          <Button label="Continue" type="submit" position="right" onClick={null}/>
        </form>
      </div>
    </div>
  )
}

export default DvlaLoginContent