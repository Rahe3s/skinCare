import React from 'react'
import './Product.css'
import { products } from '../../Assets/productdetails'

function Product() {
  return (
    <section id='product' className='product'>
      <div className="product_header">
      <h1>Our Products</h1>
      </div>
    <div className="product_list">
      {products.map(({img,product_name,price},index)=>{
        return(
      <div className="product_card">
        <img src={img} alt="sample" />
        <h2>{product_name}</h2>
        <p>{price}</p>
        
      </div>
      )
    })}
    </div>
    <div className='product_footer'>

    </div>
    
  </section>
  )
}

export default Product