import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import './product.css'
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([])
  const [showAll, setShowAll] = useState(false)

  function fetchproducts() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products)
        console.log(response.data.products)
      })
  }

  useEffect(() => {
    fetchproducts()
  }, [])

  const handleShowAll = () => {
    setShowAll(true)
  }

  return (
    <div className='product-section-container'>
      <p>Featured Product</p>
      <h1>BEST SELLER PRODUCTS</h1>
      <p>Problems trying to resolve the conflict between </p>
      <div className='card-container'>
        {
          products.length > 0 ? (
            products.slice(0, showAll ? products.length : 10).map((value, index) => (
              <div key={index}>
                <ProductItem {...value} />
              </div>
            ))
          ) : (
            <h1>product is Loading...</h1>
          )
        }
      </div>
      {
        !showAll && (
          <button onClick={handleShowAll} className='load-more-product'>LOAD MORE PRODUCTS</button>
        )
      }
    </div>
  )
}

export default Products
