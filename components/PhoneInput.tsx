import Link from 'next/link';
import React,{useState} from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Logo from '../public/image.webp'
 
type Props = {
    type:string;
    label:string;
    placeholder: string;
}

function PhoneInput({ label,type,placeholder }: Props) {
  const [show,setShow] = useState(false)
  const showPwd = (e:any) => {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div className="flex flex-col space-y-1.5">
        <div className="flex justify-between">
          <label className="font-medium font-circular">{label}</label>
          { type == 'password' && <Link href=""><span className="font-bold text-[0.95rem] text-green-700">Forgot Password?</span></Link> }
        </div>
        <div className="relative flex space-x-2">
            <div className="w-24 rounded overflow-hidden">
              <select className="px-4 p-3.5 w-full flex-1 rounded-md border border-gray-300 focus:border-2 focus:border-black font-circular">
                <option>
                  <div>
                    <img src={Logo.src} />
                    <span>+233</span>
                  </div>
                </option>
              </select>
            </div>
            <input autoComplete="false" type="number" maxLength={10} placeholder={placeholder} className="px-4 p-3.5 flex-1 rounded-md border border-gray-300"/>
        </div>
    </div>
  )
}

export default PhoneInput