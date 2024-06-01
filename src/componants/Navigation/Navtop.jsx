import React from 'react'
import './navtop.css'
import { FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react'
const Navtop = () => {
  return (
    <div className='navtop'>
    <span> <p> <i class="ph ph-phone"></i> (225) 555-0118</p>
     <p> <i class="ph ph-envelope"></i> michelle.rivera@example.com</p></span>
      <p>Follow Us  and get a chance to win 80% off</p>

    <div className='topIcons'>
    Follow Us  :
    <InstagramLogo size={25} />
    <YoutubeLogo size={25} />
    <FacebookLogo size={25} />
    <XLogo size={25} />
    </div>
    </div>
  )
}

export default Navtop
