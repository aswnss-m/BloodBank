import React, { useState, useEffect } from 'react';
import '../Assets/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ onLogout }) {
  const [islogged, setIslogged] = useState(localStorage.getItem('isAuth'));

  const localStorageItem = localStorage.getItem('isAuth');

  useEffect(() => {
    setIslogged(localStorageItem);
  }, [localStorageItem]);

  return (
    <div className="navbar">
      <span className="navbarLogo whiteText">
        <h1>
          <Link to="/" id="navbarLogo">
            Blood Bank
          </Link>
        </h1>
      </span>
      <span className="navbarLinks">
        <Link className="darkAccent" to={'#'}>
          Contact
        </Link>
        {islogged ? (
          <Link to={'/'} onClick={() => {
            setIslogged(false);
            onLogout(false);
            }}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </span>
    </div>
  );
}

export default Navbar;
