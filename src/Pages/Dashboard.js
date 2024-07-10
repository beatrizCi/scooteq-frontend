// src/Pages/Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
