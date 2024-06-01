import React from 'react'
import Navtop from '../Navigation/Navtop'
import Footer from '../footer/Footer'
import Navbar from '../Navigation/Navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navtop />
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default Layout
