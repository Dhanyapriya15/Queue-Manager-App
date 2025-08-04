import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleQueueClick = () => {
    navigate('/queue/1');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleQueueClick}>Go to Queue</button>
    </div>
  );
}

export default Dashboard;
