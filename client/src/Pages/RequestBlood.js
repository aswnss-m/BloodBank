import React from 'react'
import "../Assets/RequestBlood.css"
import { useState } from 'react'

function RequestBlood() {


    const [patientName,SetPatientName] = useState("");
    const [patientAge,SetPatientAge] = useState("");
    const [patientBloodGroup,SetPatientBloodGroup] = useState("");
    const [patientBloodUnits,SetPatientBloodUnits] = useState("");
    const [patientLocation,SetPatientLocation] = useState("");
    const [standeeName,SetStandeeName] = useState("");
    const [standeeNumber,SetStandeeNumber] = useState("");

    const handleClick = () =>{
        console.log(patientName);
        console.log(patientAge);
        console.log(patientBloodGroup);
        console.log(patientBloodUnits);
        console.log(patientLocation);
        console.log(standeeName);
        console.log(standeeNumber);
    }

  return (
    <div className="formContainer">
        <div className='form'>
        <h3 className='formTitle' >Request Blood</h3>
            <div className="formGroup">
                <label htmlFor="patientName">
                    Patient Name :
                </label>
                <input type="text" id='patientName' autoFocus onChange={(e)=>{SetPatientName(e.target.value)}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="patientAge">
                    Age :
                </label>
                <input type="number" id='patientAge' inputMode='number'onChange={(e)=>{SetPatientAge(e.target.value)}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="patientBloodGroup">
                    Blood Group :
                </label>
                <select name="bloodGroup" id="patientBloodGroup" defaultValue={'A+'} onChange={(e)=>{SetPatientBloodGroup(e.target.value)}}>
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
                <input type="number" inputMode='number' id='bloodUnits' onChange={(e)=>{SetPatientBloodUnits(e.target.value)}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="hospitalLocation">
                    Hospital Location :
                </label>
                <input type="text" id='hospitalLocation' onChange={(e)=>{SetPatientLocation(e.target.value)}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="standeeName">
                    Standee Name :
                </label>
                <input type="text" id='standeeName'  onChange={(e)=>{SetStandeeName(e.target.value)}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="standeeNumber">
                    Standee Mobile Number :
                </label>
                <input type="text" id='standeeNumber' inputMode='number' onChange={(e)=>{SetStandeeNumber(e.target.value)}}/>
            </div>
            <button  className="primaryButton searchButton" onClick={handleClick}>Search</button>
        </div>
    </div>
  )
}

export default RequestBlood