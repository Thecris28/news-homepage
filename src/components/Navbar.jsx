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
          <button onClick={handleMenu} className='open-button'>
            <img src={burgerMenu} alt="Menu" />
          </button>
          <div className={`overlay ${menu ? 'visible' : ''}`} onClick={handleMenu}></div>
          <ul className={`navbar ${menu ? 'open' : 'hidden'}`}>
            <li className='close-menu-li'>
              <img src={closeMenu} onClick={handleMenu} className={` ${menu ? 'close-menu-li' : ''}`} alt="Close Menu" />
            </li>
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
