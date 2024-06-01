import React from 'react'
import image from '../../assets/product-cover-5.png'
const ProductItem = (props) => {
  return (
    <div className='card-section'>
     <div className='card'>
     <img src={props.images[0]} className='Image-top' alt="" />
       <h2>{props.title}</h2>
       <p>{props.discription}</p>
       <p>{props.price}| $6.48 </p>
     </div>
    </div>
  )
}

export default ProductItem
