// src/Pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });
            onLogin(response.data);
            navigate('/dashboard'); // Redirect to dashboard
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <h1>Scooteq</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Please Enter your Account details</h2>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Johndoe@gmail.com"
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                    />
                    <p className="forgot-password">Forgot Password?</p>
                    <button type="submit">Sign in</button>
                    {message && <p>{message}</p>}
                </form>
                <div className="social-login">
                    <MDBIcon fab icon='google' size="2x" />
                    <MDBIcon fab icon='github' size="2x" />
                    <MDBIcon fab icon='facebook' size="2x" />
                </div>
                <p className="create-account">Don't have an account? <a href="/register">Create an account</a></p>
            </div>
            <div className="login-right">
                <h2>Welcome Back!</h2>
                <div className="navigation"></div>
                <div className="highlight">
                    <p>Get your right job and right place apply now</p>
                    <p>Be among the first founders to experience the easiest way to start run a business.</p>
                    <div className="avatars"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
