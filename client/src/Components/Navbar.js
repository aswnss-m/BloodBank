import React from 'react';
import "../Assets/Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <span className='navbarLogo'>
            <h1>Blood Bank</h1>
        </span>
        <span className="navbarLinks">
            <a className='darkAccent' href='#'>Contact</a>
            <a href='#'>Login</a>
        </span>
    </div>
  )
}

export default Navbar