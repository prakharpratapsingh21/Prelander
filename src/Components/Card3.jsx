import React, { useState } from 'react'
import { FiAperture } from "react-icons/fi";

function Card3() {
    const [val, setVal]=useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
        <div className=' relative w-60 h-32 rounded-md bg-zinc-500 flex overflow-hidden'>
            <img className={'shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]} w-full h-full object-cover '} src="https://images.unsplash.com/photo-1716847214513-dfac4f00635b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />

            <img className={'shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]} w-full h-full object-cover '} src="https://images.unsplash.com/photo-1716872491340-4626a22c582d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 flex items-center justify-center absolute left-1/2 bottom-[0%] -translate-x-[50%] -translate-y-[50%] bg-[#dadada7b] rounded-full'>
                <FiAperture/>
            </span>
        </div>
    </div>
  )
}

export default Card3