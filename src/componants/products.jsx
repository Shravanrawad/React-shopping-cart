import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { add } from '../store/cartslice';
import { fetchproducts } from '../store/productslice';
import { Statuses } from '../store/productslice';

function Products() {

const dispatch = useDispatch()

const {data: products, status} = useSelector((state) => state.product)



useEffect(() => {

       dispatch(fetchproducts())
//     const fetchdata = async () => {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data = await response.json()
//         console.log(data)
//         setproducts(data)
//     }
//     fetchdata();
 },[])

const handeladd = (product) => {
      dispatch(add(product))
}



if(status === Statuses.LOADING){
    return <div className='loadingtext'><h2>Loading...</h2></div>
}

if(status === Statuses.ERROR){
    return <h2>Product is not availble</h2>
} 

  return (

    <div className='productsWrapper'>
      
      {products.map(product => (

            <div className="card" key={product.id}>
               
               <img src={product.image} alt="img" />
               <h4>{product.title}</h4>
               <h5>{product.price}</h5>
               <button onClick={()=> handeladd(product)}  className='btn'>Add to cart</button>

            </div>
      ))}
    </div>
  )
}

export default Products
