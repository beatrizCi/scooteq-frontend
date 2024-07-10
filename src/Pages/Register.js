// src/Pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onShowLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', {
        username,
        password,
        email,
      });
      setMessage('User registered successfully');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Habu</h1>
        <form onSubmit={handleSubmit}>
          <h2>Please enter your details to register!</h2>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button type="submit">Register</button>
          {message && <p>{message}</p>}
        </form>
        <p className="create-account">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
