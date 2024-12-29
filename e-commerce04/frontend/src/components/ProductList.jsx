import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';

const ProductList = ()=> {
  // const [products, setProducts] = useState ([]);
  const {items:products,status} = useSelector(state => console.log(state))
  useEffect(()=>{
      // const fetchProducts=async()=>{
      //   const response=await fetch('https://fakestoreapi.com/products');
      //   const data = await response.json();
      //   setProducts(data)
      // } 
      // fetchProducts();
  },[])
  return (
    <>
      <Navbar />
      <div className='product-list'>
        {products.map((product)=>(
        <div className='product-card' key={product.id}>
            <img src={product.image} alt="image title" />
            <h2>{product.title.length>20? `${product.title.slice(0,20)}...` :product.title}</h2>
            <p>Price : $ {product.price}</p>
            <button>Add to cart</button>
        </div>
        ))}
      </div>
    </>
  )
}

export default ProductList