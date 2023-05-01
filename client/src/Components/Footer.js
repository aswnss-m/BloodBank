import React from 'react'
import "../Assets/Footer.css"
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="footerQuickLinks">
            <ul>
                <li>Request Blood</li>
                <li>Register</li>
                <li>Donate</li>
            </ul>
        </div>
        <div className="footerProjectPeople">
            <ul>
                <li>Aswin Lal- 1234456</li>
                <li>Aswin Lal- 1234456</li>
                <li>Aswin Lal- 1234456</li>
            </ul>
        </div>
        <div className="footerDocumentationLink">
            <ul>
                <li><Link>github-icon</Link></li>
            </ul>
        </div>
        <div className="footerMadeBy">
           <p><Link>Made by Aswin Lal M</Link></p>
        </div>
    </div>
  )
}

export default Footer