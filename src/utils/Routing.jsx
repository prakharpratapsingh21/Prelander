import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components12/Home'
import About from '../Components12/About'
import Contact from '../Components12/Contact'
import UserDets from '../Components12/UserDets'
import Nisha from '../Components12/Nisha'
function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} >
          <Route path="/about/:name" element={<Nisha/>}/>
        </Route>
       
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  )
}

export default Routing