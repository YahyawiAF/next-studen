import Link from 'next/link';
import React,{useState} from 'react'

type Props = {
    type:string;
    label:string;
    placeholder: string;
    value:string;
    defaultValue:string;
    name:string;
}

function Input(props: any) {
  const [show,setShow] = useState(false)
  const showPwd = (e:any) => {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div className="flex flex-col space-y-1.5">
        <div className="flex justify-between">
          <label className="font-medium font-circular">{props.label}</label>
          
          { false && props.type == 'password' && <Link href=""><span className="font-bold text-[0.95rem] text-yellow-800/90">Forgot Password?</span></Link> }
        </div>
        <div className="relative flex">
          <input {...props} autoComplete="false" type={props.type == 'password' && show ? 'text':props.type} placeholder={props.placeholder}   className="px-4 p-3.5 flex-1 rounded-md border border-gray-300 font-circular text-yellow-800/90 placeholder:text-gray-400 focus:caret-yellow-800/90 focus:border-[#228e9d] focus:outline-none focus:ring-2 focus:ring-[#228e9d]"/>
          { props.type == 'password' && <button onClick={showPwd} className="w-20 absolute top-1/4 right-1 z-20 font-bold text-sm text-[#228e9d]">{ show ? 'HIDE':'SHOW' }</button> }
        </div>
    </div>
  )
}

export default Input