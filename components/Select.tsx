import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
 
type Props = {
    label:string;
    children: any;
}

function Select(props: any) {
  return (
    <div className="flex flex-col space-y-1.5">
        <label className="font-medium font-circular">{props.label}</label>
        <div className="rounded overflow-hidden">
            <select {...props} className="px-4 p-3.5 w-full flex-1 text-yellow-800/90 rounded-md border border-gray-300 focus:border-2 focus:border-black font-circular">
              {props.children}
            </select>
        </div>
    </div>
  )
}

export default Select