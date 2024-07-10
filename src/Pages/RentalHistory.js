import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RentalHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching rental history', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Rental History</h1>
      <ul>
        {history.map((record, index) => (
          <li key={index}>{`Scooter ID: ${record.scooterId}, Duration: ${record.duration} hours`}</li>
        ))}
      </ul>
    </div>
  );
};

export default RentalHistory;
