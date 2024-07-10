import React, { useState } from 'react';
import axios from 'axios';

const RentalForm = () => {
  const [scooterId, setScooterId] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rent', {
        scooterId,
        duration
      });
      alert('Scooter rented successfully');
    } catch (error) {
      alert('Error renting scooter');
    }
  };

  return (
    <div>
      <h1>Rent a Scooter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Scooter ID:
          <input type="text" value={scooterId} onChange={(e) => setScooterId(e.target.value)} />
        </label>
        <br />
        <label>
          Duration (in hours):
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br />
        <button type="submit">Rent Scooter</button>
      </form>
    </div>
  );
};

export default RentalForm;
