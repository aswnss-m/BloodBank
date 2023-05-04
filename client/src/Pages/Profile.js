import React from 'react'

function Profile() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className='profileContainer'>
      <div className="profileCard">
        <div className="profileCardBlood">
          {userData.bloodGroup}
        </div>
        <div className="profileCardDetails">
          <p>{userData.name}</p>
          <p>{userData.age} | {userData.weight} </p>
          <p>{userData.location}</p>
          <p>{userData.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile