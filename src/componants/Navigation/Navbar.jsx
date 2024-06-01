import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ShoppingCart, MagnifyingGlass, Heart } from '@phosphor-icons/react'

const Navbar = () => {
  const item = [
    {
      name: "Home",
      label: "Home",
      Path: "/"
    },
    {
      name: "Shop",
      label: "Shop",
      Path: "/shop"
    },
    {
      name: "About",
      label: "About",
      Path: "/about"
    },
    {
      name: "Contact",
      label: "contact",
      Path: "/contact"
    },
    {
      name: "pages",
      label: "pages",
      Path: "/pages"
    }
  ]
  return (
    <nav>
      <div className='left-nav'>
        <strong>Bandage</strong>
        <ul>
          {item.map((item) => (
            <li className='li' key={item.name}>
              <Link to={item.Path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        /
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <MagnifyingGlass size={25} />
        </li>
        <li>
          <ShoppingCart size={25} />
        </li>
        <li>
          <Heart size={25} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
