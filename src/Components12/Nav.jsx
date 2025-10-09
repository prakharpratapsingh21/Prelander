import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Nav() {
  return (
    
        <nav className='w-64 m-auto flex justify-center items-center gap-10 mt-10'>
            <NavLink style={(e)=>{
               return{
                color: e.isActive? "red" : ""
               } 
            }} className='font-bold' to={"/"}> Home </NavLink>

            <NavLink to={"/about"}>
                {(e)=>{
                    return (
                        <span className={[
                            e.isActive? "text-[rgb(255,0,0)]" : "",
                            e.isActive? "font-bold" : ""
                        ].join(" ")}> About</span> )
                }}
            </NavLink>
            
            <NavLink className={(e)=>{
                return[
                    e.isActive? "text-[rgb(255,0,0)]" : "",
                    e.isActive? "font-bold" : ""
                ].join(" ")
            }}  to={"/contact"}>Contact </NavLink>
        </nav>
    
  )
}

export default Nav