import React, {useEffect, useState} from 'react'
import {Link, useParams} from'react-router-dom'
import axios from 'axios';
import Loading from './Loading';
function Details() {
  const [product, setproduct] = useState(null)
  const {id} = useParams();
  const getsingleproduct= async()=>{
    try{
        const {data}= await axios.get(`/products/${id}`);
        setproduct(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getsingleproduct();
  },[])

  return  product ?(
    <div className='w-full h-screen p-[5%] '>
      <div className='w-[80%] flex justify-center gap-10 h-full m-auto border border-zinc-300 rounded-lg py-[5%] px-[3%] bg-zinc-200'>
          <img className='h-[90%] w-[80%] rounded-lg' src={`${product.image}`} alt="" />
          <div className='content'>
            <h1 className='text-4xl font-sans'>{product.title}</h1>
            <h3 className='text-zinc-500 my-2 font-semibold'>{product.category}</h3>
            <h2 className='text-red-600 font-bold my-1'>{product.price}</h2>
            <p className='w-[95%] text-justify mb-5 font-sans'>{product.description}</p>
            <Link className='px-5 py-1 rounded bg-blue-400 text-white mr-5 font-semibold '>Edit</Link>
            <Link className='px-4 py-1 rounded bg-red-600 text-white mr-5 font-semibold'>Delete</Link>
          </div>
      </div>
    </div>
  ) :
  (
    <Loading/>
  )
}

export default Details