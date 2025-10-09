import React, { useContext, useEffect,useState } from 'react'
import Nav from '../Warmup Project/Nav'
import {Link, useLocation} from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading  from '../Warmup Project/Loading'
import axios from 'axios'

function Home() {
   const [products]= useContext(ProductContext);
   const {search}= useLocation();
   const category= decodeURIComponent(search.split("=")[1]);
   const [filteredproducts, setfilteredproducts] = useState(null);

   const getproductscategory= async ()=>{
    try{
      const {data}= await axios.get(`/products/category/${category}`);
      setfilteredproducts(data);
    }catch (error){
      console.log(error);
    }
   };

   useEffect(()=>{
      if (!filteredproducts) setfilteredproducts(products);
      if (category != "undefined") getproductscategory();
   },[category, products])

  return products ?(
    <>
        <Nav/>
        <div className='w-[85%]  p-5 pt-[5%] flex flex-wrap gap-8 justify-center overflow-x-hidden overflow-y-auto'>    {/* Homepage */}
        {filteredproducts && filteredproducts.map((p,i)=>  (
            <Link key={p.id} to= {`/details/${p.id}`} className='card w-[20%] h-[40vh] p-5 border shadow rounded flex-wrap flex-col justify-center items-center mb-3'>        {/* Card Div */}
                 {/* Image Div */}
            <div className='hover:scale-125 w-full h-[75%] bg-contain bg-no-repeat bg-center' style={{backgroundImage:`url(${p.image})`}} ></div>
            <h1 className='hover:text-blue-400 text-center text-sm mt-1'>{p.title}</h1>
            </Link> 
            ))}
        </div>
      </>
  ): (
    <Loading/>
  )
}

export default Home