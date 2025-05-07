
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://smart-summer-backend.onrender.com/api/students')
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Summer Dashboard</h1>
      {students.map(s => (
        <div key={s.id}>
          <strong>{s.name}</strong> - Reading: {s.reading}, Math: {s.math}, Logic: {s.logic}
        </div>
      ))}
    </div>
  );
}

export default App;
