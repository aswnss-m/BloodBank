import React from 'react';
import "../Assets/Navbar.css";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
        <span className='navbarLogo whiteText'>
        <h1>
            <Link to='/' id='navbarLogo'>
              Blood Bank
            </Link>
            </h1>
        </span>
        <span className="navbarLinks">
            <a className='darkAccent' href='#'>Contact</a>
            <Link to='/login'>Login</Link>
        </span>
    </div>
  )
}

export default Navbar