// import React from 'react'

// function Propscard({name, image, profession, friends, click, cardindex}) {
    
//   return (
//     <div className='w-44 h-[50vh] bg-white rounded-md overflow-hidden'>
//       <div className='w-full h-[70%] object-cover bg-zinc-500'><img className='w-full h-full object-cover' src={image} alt="" /></div>
//       <div className='w-full p-2'>
//         <h3 className='font-semibold text-xl'>{name}</h3>
//         <h5 className='text-xs'>{profession}</h5>
//         <button onClick={()=>click(cardindex)} className='px-3 py-1 bg-blue-400  text-sm font-semibold mt-1 rounded-md'>{friends===true? "Friends" : "Add Friends"}</button>
//       </div>
//     </div>
//   )
// }

// export default Propscard

import React from 'react'

function Propscard({name, profession, image, friends, click, cardindex}) {
  return (
    <div className="w-48 h-[50vh] rounded-md overflow-hidden ">
      <div className="w-full h-[70%] "><img className='w-full h-full object-cover' src={image} alt="" /></div>
      <div className='w-full p-2 bg-zinc-300 '>
          <h3 className='font-semibold text-xl '>{name}</h3>
          <h5 className='text-xs'>{profession}</h5>
          <button onClick={()=>click(cardindex)} className='px-3 py-1 rounded-md bg-blue-400 text-xs mt-1 text-white'>{friends=== true? "Friends" : "Add Friends"}</button>
      </div>
    </div>
  )
}

export default Propscard