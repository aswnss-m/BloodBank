import React from 'react'
import "../Assets/FloatingButton.css"
import { Link } from 'react-router-dom'

function FloatingButton() {
  return (
    <div className="floatingButtonContainer">
        <div className='requestBlood'>
            <Link to='/request_blood'>
              <span className='boldText'>Request Blood</span>
              <p>in need for blood ? Click here to search</p>
            </Link>
        </div>

        <div className='registerBlood'>
            <Link to="/register">
            <span className='boldText'>Register as Donor</span>
            <p>Register yourself as a donor and donate blood</p>
            </Link>
        </div>

        <div className='donateMoney'>
            <span className="boldText">Donate</span>
            <p>$</p>
        </div>
    </div>
  )
}

export default FloatingButton