
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/queue')
      .then(res => setQueue(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Queue Manager</h1>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>{item.name} - {item.token}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
