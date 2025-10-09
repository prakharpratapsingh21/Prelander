import React,{useContext} from 'react'
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Nav() {

  const [products]= useContext(ProductContext);
  let distinct_category= products && products.reduce((acc, cv)=> [...acc, cv.category], []);
  distinct_category= [... new Set(distinct_category)]

  const color= ()=>{
    return `rgba( ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()},0.5)`
  }

  return (
    <nav className='w-[15%] h-screen bg-zinc-100 p-4 flex flex-col items-center'>
    <a className='py-2 px-2 border border-blue-200 rounded text-blue-300' href="/create">Add New Product</a>
    <hr className='my-3 w-full border-zinc-300'/>
    <h1 className='w-[90%] mb-3 text-xl'>Category</h1>
    <div className='w-[90%]'>
      {distinct_category.map((c,i)=>(
          <Link key={i} to={`/?category=${c}`} className=' flex items-center mb-3'>
          <span style={{backgroundColor:color()}} className='w-[15px] h-[15px] mr-2 bg-sky-300 rounded-full'></span>
          {c}</Link>
      ))}
      
        
    </div>
  </nav>
  )
}

export default Nav