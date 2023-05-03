import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/RequestBlood.css'; // import the stylesheet
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // send login request to server
    axios.post('http://localhost:5000/login', {
      email,
      password,
    })
      .then(response => {
        console.log('Success:', response);
        // create a cached login token in the browser
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="formTitle">Login</h3>
        <div className="formGroup">
          <label htmlFor="userEmail">Email:</label>
          <input type="email" id="userEmail" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="formGroup">
          <label htmlFor="userPassword">Password:</label>
          <input type="password" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <input type="submit" className="primaryButton searchButton" value="Login" />
      </form>
    </div>
  );
}

export default Login;
