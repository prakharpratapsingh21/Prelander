import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='w-[70vw] m-auto mt-12  p-6'>
        <h1 className='text-3xl font-bold text-red-600'>About</h1>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora at hic autem quaerat quod rerum, excepturi quidem illum deleniti quia nemo id nihil et. Mollitia vitae sit aut quam suscipit voluptatem unde corrupti. Error quaerat ipsa eos facilis harum dolore beatae, et quasi? Quo laudantium labore aut minus temporibus.</p> */}
        <div className='w-1/2 flex flex-col mt-5'>
            <NavLink className='p-3 bg-red-300 text-xl hover:bg-red-500 ' 
            to="/about/Aman">
            Aman</NavLink>
            <NavLink className='p-3 bg-red-300 text-xl hover:bg-red-500 mt-2 ' 
            to="/about/Arun">
            Arun</NavLink>
            <NavLink className='p-3 bg-red-300 text-xl hover:bg-red-500 mt-2' 
            to="/about/Amish"
            >Amish</NavLink>
        </div>

    </div>
  )
}

export default About