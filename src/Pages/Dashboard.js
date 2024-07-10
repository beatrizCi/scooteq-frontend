import React from 'react';
import '../App.css'; // Correct path to App.css
import './Dashboard.css'; // Correct path to Dashboard.

const Dashboard = ({ user }) => {
    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
            <p>This is your dashboard.</p>
        </div>
    );
};

export default Dashboard;
