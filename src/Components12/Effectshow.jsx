import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from '../utils/Axios1';
function Effectshow() {
    //Get Products From Api
    const [products,setproducts]=useState([])
    const getProducts = () =>{
    

    axios
      .get("/products" ).then(products=>{
        console.log(products);
        setproducts(products.data);
      }).catch(err=>{console.log(err)});
    };
    useEffect(()=>{
        getProducts();
    },[])
    //Add Products to Api
    // const addProducts = () =>{
    //     const api= "https://fakestoreapi.com/products"  ;
    //     axios
    //         .post(api,{
    //           title:"Test Product",
    //           price:"10",
    //           description:"Test Product",
    //           image:"https.//i.pravatar.cc",
    //           category:"electronic",
    //         })
    //         .then((res)=>{
    //           console.log(res);
    //         })
    //         .catch((err)=>console.log(err))
    //   }
    //  
  return (
    <>
        {/* <button onClick={addProducts} className='bg-blue-500 text-sm px-3 py-1 text-white font-semibold rounded-md mx-8'>Add New Product</button> */}
        <button onClick={getProducts} className='bg-blue-500 text-sm px-3 py-1 text-white font-semibold rounded-md'>Get Products</button>
        <hr className='my-10'/>
        <ul>
            {products.length > 0 ? products.map(p=>  
            <li key={p.id} className='mb-4'>{p.title}</li>):<h1>Loading...</h1>}
        </ul>
    </>
  )
}

export default Effectshow