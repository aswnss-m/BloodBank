import React from 'react'
import "../Assets/Card.css"
function Card({phoneNumber}) {
  const handleCallButtonClick = () => {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      alert(`Phone number ${phoneNumber} copied to clipboard!`);
    }
    console.log(phoneNumber);
  };
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
            <button className="primaryButton-invert" onClick={handleCallButtonClick}>Contact</button>
        </div>
    </div>
    </>
  )
}

export default Card