import React from 'react'
import "../Assets/RequestBlood.css"

function RequestBlood() {
  return (
    <div className="formContainer">
        <form action="#" method="post" className='form'>
        <h3 className='formTitle' >Request Blood</h3>
            <div className="formGroup">
                <label htmlFor="patientName">
                    Patient Name :
                </label>
                <input type="text" id='patientName' />
            </div>
            <div className="formGroup">
                <label htmlFor="patientAge">
                    Age :
                </label>
                <input type="number" id='patientAge' inputMode='number'/>
            </div>
            <div className="formGroup">
                <label htmlFor="patientBloodGroup">
                    Blood Group :
                </label>
                <select name="bloodGroup" id="patientBloodGroup" defaultValue={'A+'}>
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
                <label htmlFor="bloodUnits">
                    No of Units :
                </label>
                <input type="text" id='bloodUnits' />
            </div>
            <div className="formGroup">
                <label htmlFor="hospitalLocation">
                    Hospital Location :
                </label>
                <input type="text" id='hospitalLocation' />
            </div>
            <div className="formGroup">
                <label htmlFor="standeeName">
                    Standee Name :
                </label>
                <input type="text" id='standeeName' />
            </div>
            <div className="formGroup">
                <label htmlFor="standeeNumber">
                    Standee Mobile Number :
                </label>
                <input type="text" id='standeeNumber' inputMode='number'/>
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
            <input type="submit" className="primaryButton searchButton" value="Search" />
        </form>
    </div>
  )
}

export default RequestBlood