import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleNav = () => {
    setShowNav(!showNav)
  }


  return (
    <div className='header'>
      <Link to='/'>
        <h1>PLANEXT LANCS</h1>
      </Link>
      <ul className={ showNav ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/training'>Training</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleNav} >
        {showNav ? (<FaTimes size={20}  className='icon' />) : (<FaBars size={20} className='icon' />)}
      </div>
    </div>
  )
}
