import React from 'react'
import '../styles/Logo.css'
import logo from '../assets/mainLogo.png'
const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt='' />
    </div>
  )
}

export default Logo