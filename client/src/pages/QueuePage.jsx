import React, { useState } from 'react';

function QueuePage() {
  const [queue, setQueue] = useState([]);
  const [name, setName] = useState('');

  const addToken = () => {
    const token = { id: Date.now(), name };
    setQueue([...queue, token]);
    setName('');
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const updated = [...queue];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setQueue(updated);
  };

  const moveDown = (index) => {
    if (index === queue.length - 1) return;
    const updated = [...queue];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setQueue(updated);
  };

  const removeToken = (id) => {
    setQueue(queue.filter((token) => token.id !== id));
  };

  const serveToken = () => {
    setQueue(queue.slice(1));
  };

  return (
    <div>
      <h2>Queue</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <button onClick={addToken}>Add Token</button>
      <ul>
        {queue.map((token, index) => (
          <li key={token.id}>
            {token.name}
            <button onClick={() => moveUp(index)}>↑</button>
            <button onClick={() => moveDown(index)}>↓</button>
            <button onClick={() => removeToken(token.id)}>Cancel</button>
          </li>
        ))}
      </ul>
      <button onClick={serveToken}>Serve Top Token</button>
    </div>
  );
}

export default QueuePage;
