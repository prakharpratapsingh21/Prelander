import React from 'react'
function Card2() {
    const data=[
        {
            name:"Naina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing ipsum dolor sit."
        },
        {
            name:"Crew",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing ipsum dolor sit."
        },
        {
            name:"Saiyaan",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing ipsum dolor sit."
        }
    ];
    const handleClick=()=>{alert("HEyy chl gya")}

  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col gap-5 justify-center items-center '> 
        {data.map((elem,index)=>(
            <div key={index} className=' w-64 song px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl '>{elem.name}</h3>
            <p className='text-xs mt-2'>{elem.description}</p>
            <button onClick={handleClick} className='px-2 py-1 bg-sky-500 text-white rounded mt-3 text-xs font-semibold'>
                Download Now</button>
        </div>
            
        ))}
    </div>

  )
};
export default Card2