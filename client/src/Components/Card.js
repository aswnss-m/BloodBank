import React from 'react'
import "../Assets/Card.css"
function Card() {
  return (
    <>
    <div className="card">
        <div className="bloodGroup">
            <p className='boldText'>A+</p>
        </div>
        <div className="details">
            <p className='boldText'>Aswin Lal M</p>
            <p>21</p>
            <p>Pappanamcode, Trivandrum</p>
            <button className="primaryButton-invert">Contact</button>
        </div>
    </div>
    </>
  )
}

export default Card