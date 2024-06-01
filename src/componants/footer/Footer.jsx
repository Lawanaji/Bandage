import { InstagramLogo, FacebookLogo, XLogo } from '@phosphor-icons/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
   <div className='logo'>
   <strong>Bandage</strong>
   <span>
   <InstagramLogo size={25} />
    <FacebookLogo size={25} />
    <XLogo size={25} />
   </span>
   </div>
   
  
  
    </div>
   
  )
}

export default Footer
