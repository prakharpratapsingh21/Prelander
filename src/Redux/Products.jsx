import React, { useEffect } from 'react'
import {getproducts} from '../Store/Reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproducts } from '../Store/actions/productActions';


function Products() {
    const {products} =useSelector((state)=>state.productReducer);
    //console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(getproducts());
        dispatch(asyncgetproducts());
    },[])
  return (
    <div className='m-auto container mt-5 p-5 bg-red-100'>
        <h1 className='text-3xl font-semibold text-red-900'>Products List</h1>
        <ul>
            {products.map((product,index)=>{
                return (
                    <li key={product.id}>
                        <h1>{product.title} 
                        <span onClick={() => DeleteHandler(index)} className='text-red-600 font-black cursor-pointer ml-2'>X</span>
                        </h1>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}


export default Products