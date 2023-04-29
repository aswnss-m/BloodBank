import React from 'react'
import "../Assets/RequestBlood.css" // For searchbutton css

function RegisterUser() {
  return (
    <div className="formContainer">
        <form action="#" method="post" className='form'>
        <h3 className='formTitle' >Register As Donor</h3>
            <div className="formGroup">
                <label htmlFor="userName">
                    Name :
                </label>
                <input type="text" id='userName' autoFocus/>
            </div>
            <div className="formGroup">
                <label htmlFor="userAge">
                    Age :
                </label>
                <input type="number" id='userAge' inputMode='number'/>
            </div>
            <div className="formGroup">
                <label htmlFor="userBloodGroup">
                    Blood Group :
                </label>
                <select name="bloodGroup" id="userBloodGroup" defaultValue={'A+'}>
                    <option value="A+">A -ve</option>
                    <option value="A+">A +ve</option>
                    <option value="A+">AB +ve</option>
                    <option value="A+">AB -ve</option>
                    <option value="A+">B +ve</option>
                    <option value="A+">B -ve</option>
                    <option value="A+">O +ve</option>
                    <option value="A+">O -ve</option>
                </select>
            </div>
            <div className="formGroup">
                <label htmlFor="userWeight">
                    Weight
                </label>
                <input type="number" inputMode='number' id='userWeight' placeholder='in kg' />
            </div>
            <div className="formGroup">
                <label htmlFor="userLocation">
                    Location :
                </label>
                <input type="text" id='userLocation' placeholder='District' />
            </div>
            <div className="formGroup">
                <label htmlFor="userEmail">
                    Email :
                </label>
                <input type="email" id='userEmail' inputMode='email' />
            </div>
            <div className="formGroup">
                <label htmlFor="userNumber" >
                    Mobile Number :
                </label>
                <input type="text" id='userNumber' inputMode='tel'/>
            </div>
            <div className="formGroup">
                <span id='otpField'>
                <label htmlFor="otp">
                    Otp : 
                </label>
                <button className="primaryButton">Verify</button>
                </span>
                <input type="text" id='otp' />
            </div>
            <input type="submit" className="primaryButton searchButton" value="Register" />
        </form>
    </div>
  )
}

export default RegisterUser 