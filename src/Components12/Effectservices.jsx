import React, { useEffect } from 'react'

function Effectservices() {
    useEffect(()=>{
        console.log("service Component is created");
        return ()=>{
            console.log("Service component is deleted");
        }
    })

  return (
    <div>Effectservices</div>
  )
}

export default Effectservices