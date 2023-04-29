import React from 'react'
import "../Assets/RequestBlood.css"
import "../Assets/EmergencyPage.css"

function RequestBlood() {
  return (
    <div className="emergencyBackground formContainer">
        <form action="#" method="post" className='form'>
        <h3 className='formTitle' >Emergency Blood</h3>
            <div className="formGroup">
                <label htmlFor="patientName">
                    Patient Name :
                </label>
                <input type="text" id='patientName' autoFocus/>
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
                <label htmlFor="hospitalLocation">
                    Hospital Location :
                </label>
                <input type="text" id='hospitalLocation' />
            </div>
            <input type="submit" className="primaryButton searchButton" value="Search" />
        </form>
    </div>
  )
}

export default RequestBlood