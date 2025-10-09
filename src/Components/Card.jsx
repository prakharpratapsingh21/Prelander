import React from 'react'

function Card() {
  const data=[
    {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D', 
    name:"Amazon Basics", 
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    instock:true},
    {image:'https://images.unsplash.com/photo-1553171403-619f44bdb0aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFpbHl8ZW58MHx8MHx8fDA%3D', 
    name:"Daily Items", 
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    instock:false},
    {image:'https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVjZXNzaXRpZXN8ZW58MHx8MHx8fDA%3D', 
    name:"Necessities", 
    description:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    instock:true}
  ]

  return (
    //body container
     <div className='w-full h-screen bg-zinc-400 flex items-center justify-center gap-10'>   
        {data.map((elem,index)=>(
          <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-100'>
            <img className='w-full h-full object-cover' src={elem.image} alt="" />
          </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold '>{elem.name}</h2>
            <p className='text-xs mt-3'>{elem.description}</p>
            <button className={`px-4 py-1 rounded ${elem.instock ? 'bg-sky-600': 'bg-red-600'} text-zinc-100 mt-3`}>{elem.instock ? "In Stock" : "Out of Stock"}</button>
        </div>
        </div>
        ))}
    </div>
  )
}

export default Card;