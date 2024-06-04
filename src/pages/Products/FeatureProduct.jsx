import React from 'react'
import image1 from '../../assets/bx_bxs-book-reader.svg'
import image2 from '../../assets/Vector.svg'
import image3 from '../../assets/uil_arrow-growth.svg'
const FeatureProduct = () => {
  return (
    <div className='feature-product'>
      <div className=''>
<h3>Featured Products</h3>
<h1>THE BEST SERVICES</h1>
<p>Problems trying to resolve the conflict between </p>

<div className="feature-product-2">
<div className='items-product-feature'>
    <img src={image1} alt="" />
    <h2>Easy Wins</h2>
    <p>Get your best looking smile now!</p>
</div>
<div className='items-product-feature'>
    <img src={image2} alt="" />
    <h2>Concrete</h2>
    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
</div>
<div className='items-product-feature'>
    <img src={image3} alt="" />
    <h2>Hack Growth</h2>
    <p>Overcame any hurdle or any other problem.</p>
</div>
</div>
      </div>
    </div>
  )
}

export default FeatureProduct
