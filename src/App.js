import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import RentalForm from './Pages/RentalForm';
import RentalHistory from './Pages/RentalHistory';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={!user ? <Navigate to="/login" /> : <Navigate to="/dashboard" />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
                <Route path="/rental-form" element={user ? <RentalForm user={user} /> : <Navigate to="/login" />} />
                <Route path="/rental-history" element={user ? <RentalHistory user={user} /> : <Navigate to="/login" />} />
            </Routes>
        </div>
    );
};

export default App;
