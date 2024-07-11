// src/Pages/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Navigate } from 'react-router-dom';


const Dashboard = ({ user }) => {
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            {/* Add content and components for the dashboard here */}
        </div>
    );
};

export default Dashboard;
