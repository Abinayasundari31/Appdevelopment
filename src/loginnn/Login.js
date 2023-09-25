import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Invalid username or password');
    } else {
      navigate('/');
    }
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="loginx">
      {/* Move the top-bar here */}
      <div className="top-bar">
        <div className="logo">TNRTC</div>
        <ul className="nav-menu">
          <li><a href="/" className='nav-btn'>HOME</a></li>
          <li><a href="/login" className='nav-btn'>REGISTER</a></li>
          <li><a href="/about" className='nav-btn'>ABOUT US</a></li>
          <li><a href="/about" className='nav-btn'>CONTACT</a></li>
          <li><a href="/" className='nav-btn'>LOGOUT</a></li>
        </ul>
      </div>

      {/* Login form container */}
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className='input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='a' type="submit">Register</button>
        </form>
        <div>{error}</div>
      </div>
    </div>
  );
}

export default Login;
