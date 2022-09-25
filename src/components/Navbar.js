import React, { useState } from 'react'
import '../styles/Navbar.css'
import LoginButton from './LoginButton';
import Logo from './Logo'

import NavbarItem from './NavbarItem';
import SignUpButton from './SignUpButton';



const Navbar = () => {
const [key, setKey] = useState(1);
const onNavbarItemClick = ({key}) => {
  setKey(key);
}

  return (
    <div className='navbar'>
        <Logo />
        <div className='navbarCenter'>
          <NavbarItem isSelected={key===1 ? true : false} number={1} isDropdown={false} onNavbarItemClick={ ({key}) => onNavbarItemClick({key})} title='Rent'/>
          <NavbarItem isSelected={key===2 ? true : false} number={2} isDropdown={false} onNavbarItemClick={ ({key}) => onNavbarItemClick({key})}  title='Buy'/>
          <NavbarItem isSelected={key===3 ? true : false} number={3} isDropdown={false} onNavbarItemClick={ ({key}) => onNavbarItemClick({key})} title='Sell'/>
          <NavbarItem isSelected={key===4 ? true : false} number={4} isDropdown={true} onNavbarItemClick={ ({key}) => onNavbarItemClick({key})} title='Manage Property'/>
          <NavbarItem isSelected={key===5 ? true : false} number={5} isDropdown={true} onNavbarItemClick={ ({key}) => onNavbarItemClick({key})} title='Recources'/>
        </div> 
        <div className='navbarRight'>
          <LoginButton />
          <SignUpButton />
        </div>
        
    </div>
  )
}

export default Navbar