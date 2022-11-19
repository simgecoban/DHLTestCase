import React, { useState } from 'react';
import "./NavBar.css"
import logo from './img/Logo.png';

const Navbar = ()  => {
 
  return (
    <div className='NavBar'>
        <span className='nav-logo'> <img src={logo} /></span>
        <div className= 'nav-items' >
            <a href='#'> AR-GE VE İNOVASYON</a>
            <a href='#'> ETKİNLİKLER </a>
            <a href='#'> AD STORE</a>
            <a href='#'> AI.LAND</a>

        </div>

        <div className='nav-toggle'>
            <div className='bar'>

            </div>

        </div>

      
    </div>
  )
}

export default Navbar;

