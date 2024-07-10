import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import RentalForm from './Pages/RentalForm';
import RentalHistory from './Pages/RentalHistory';
import './App.css'; // Import your CSS here

const App = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (userData) => {
        setUser(userData);
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    const handleShowRegister = () => {
        navigate('/register'); // Redirect to register page
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} onShowRegister={handleShowRegister} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard user={user} />} />
                <Route path="/rental-form" element={<RentalForm user={user} />} />
                <Route path="/rental-history" element={<RentalHistory user={user} />} />
            </Routes>
        </div>
    );
};

export default App;
