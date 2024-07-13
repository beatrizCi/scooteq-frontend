// src/Pages/FareCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const FareCalculator = () => {
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [fare, setFare] = useState(null);

    const calculateFare = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/calculate-fare', { duration, distance });
            setFare(response.data.fare);
        } catch (error) {
            console.error('Error calculating fare', error);
        }
    };

    return (
        <div>
            <h2>Calculate Fare</h2>
            <form onSubmit={calculateFare}>
                <input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Distance (km)"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
                <button type="submit">Calculate</button>
            </form>
            {fare !== null && <p>Fare: ${fare}</p>}
        </div>
    );
};

export default FareCalculator;
