import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/NavbarItem.css'

const NavbarItem = ({title,isDropdown, isSelected, number, onNavbarItemClick}) => {

  return (
    <div className={isSelected ? 'navbarItemSelected' : 'navbarItem'}  onClick={() => onNavbarItemClick({key: number})}>
        <h4>{title}</h4> 
        { isDropdown ? <KeyboardArrowDownIcon /> : null }
    </div>
  )
}

export default NavbarItem