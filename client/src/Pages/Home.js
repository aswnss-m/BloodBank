import React from 'react';
import Navbar from '../Components/Navbar';
import FloatingButton from '../Components/FloatingButton';
import Emergency from '../Components/Emergency';

import "../Assets/Home.css"

function Home() {
  return (
    <div className="container">
        <Navbar />
        <Emergency />
        <div className="homeContentContainer">
        <div className="homeContent">
          <p>Donate blood, save life</p>
          <h2>Donate Blood And Inspire Others</h2>
          <div className="exploreButton">
            Explore
          </div>
        </div>
        </div>
        <FloatingButton />
    </div>
  )
}

export default Home