import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem('isAuth'));
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

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

export default Profile;
