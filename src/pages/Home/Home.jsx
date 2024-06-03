import React from 'react'
import frame1 from '../../assets/frame1.svg'
import frame2 from '../../assets/frame2.svg'
import frame3 from '../../assets/frame3.svg'
import frame4 from '../../assets/frame4.svg'
import Products from '../Products/Products'
const Home = () => {
  return (
   <>
   <div className='home'>
   <div className='home-section'>
     <div className='frame1'>
        <p>5 Items</p>
        <h1>FUNITURE</h1>
        <button>Read More</button>
     </div>
     <div className='frame2'>

     <p>5 Items</p>
        <h1>FUNITURE</h1>
        <button>Read More</button>
     </div>
     <div className='frame3'>
     <p>5 Items</p>
        <h1>FUNITURE</h1>
        <button>Read More</button>
     </div>
     <div className='frame4'>
     <p>5 Items</p>
        <h1>FUNITURE</h1>
        <button>Read More</button>
     </div>
    </div>
    
   </div>
   <Products />
   </>
  
  )
}

export default Home
