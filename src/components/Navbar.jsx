import React, { useState } from 'react'

import burgerMenu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-menu-close.svg'

import './style.css'

export const Navbar = () => {

    const [ menu, setMenu ] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
        <div className={`overlay ${menu ? 'visible' : ''}`} onClick={handleMenu}></div>
          <button onClick={handleMenu} className='open-button'>
            <img src={menu ? closeMenu : burgerMenu} alt="Menu" />
          </button>
          <ul className={`navbar ${menu ? 'open' : 'close-menu'}`}>
            {/* <li className='close-menu-li'>
              <img src={closeMenu} onClick={handleMenu} className={` ${menu ? 'close-menu-li' : 'close-menu-li'}`} alt="Close Menu" />
            </li> */}
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </>
      );
}
