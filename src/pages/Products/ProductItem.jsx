import React from 'react'
import image from '../../assets/product-cover-5.png'
const ProductItem = (props) => {
  return (
    <div className='card-section'>
     <div className='card'>
     <img src={props.images[0]} className='Image-top' alt="" />
       <h2>{props.title}</h2>
       <p>{props.category}</p>
       <span className='price'>   <p>${props.price}</p> <strong>${props.discountPercentage}</strong></span>
     </div>
    </div>
  )
}

export default ProductItem
