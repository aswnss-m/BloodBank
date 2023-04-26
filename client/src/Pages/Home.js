import React from 'react';
import Navbar from '../Components/Navbar';
import FloatingButton from '../Components/FloatingButton';
import Emergency from '../Components/Emergency';

function Home() {
  return (
    <div className="container">
        <Navbar />
        <Emergency />
        {/* <FloatingButton /> */}
    </div>
  )
}

export default Home