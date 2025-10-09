import React from 'react'

function Propscard2({image, name, artist, added, click, index}) {
  return (
    <div className='w-60 h-32  bg-zinc-300 rounded-md flex justify-center items-center gap-4  '>
        <div className='w-20 h-20 bg-orange-300 rounded-full overflow-hidden'>
            <img className='object-center ' src={image} alt="" />
        </div>
        <div>
            <h3 className='font-semibold  leading-tight'>{name}</h3>
            <h5 className='text-xs'>{artist}</h5>
            <button onClick={()=>click(index)}  className={`px-2 py-2 text-[10px] ${added=== true? "bg-green-500" : "bg-orange-500"} text-white font-semibold mt-3 rounded-full flex flex-wrap whitespace-normal`}>{added=== true ? "Added" : "Add To Favourites"}</button>
        </div>
    </div>
  )
}

export default Propscard2