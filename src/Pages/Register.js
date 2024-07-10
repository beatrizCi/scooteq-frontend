import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
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
                email
            });
            setMessage('User registered successfully');
            setTimeout(() => {
                navigate('/'); // Redirect to login page after registration
            }, 2000);
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div className="register-container">
            <div className="register-left">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Please enter your details to register!</h2>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button type="submit">Register</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;
