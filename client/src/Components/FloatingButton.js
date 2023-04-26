import React from 'react'
import "../Assets/FloatingButton.css"

function FloatingButton() {
  return (
    <div className="floatingButtonContainer">
        <div className='requestBlood'>
            <span className='boldText'>Request Blood</span>
            <p>in need for blood ? Click here to search</p>
        </div>

        <div className='registerBlood'>
            <span className='boldText'>Register as Donor</span>
            <p>Register yourself as a donor and donate blood</p>
        </div>

        <div className='donateMoney'>
            <span className="boldText">Donate</span>
            <p>$</p>
        </div>
    </div>
  )
}

export default FloatingButton