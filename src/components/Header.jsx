import React from 'react'
import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='header'>
        <img className='header-img' src={logo} alt="logo" />
        < Navbar/>
    </header>
  )
}
