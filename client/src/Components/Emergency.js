import React, { Component } from 'react'
import "../Assets/Emergency.css"
export class Emergency extends Component {
  render() {
    return (
      <div className='emergencyBanner boldText'>
        <a href="#"><h3><u>EMERGENCY BLOOD REQUIRED !! CLICK HERE</u></h3></a>
      </div>
    )
  }
}

export default Emergency