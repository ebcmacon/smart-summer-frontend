import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Smart Summer Dashboard</h1>
      <p>
        <Link to="/login">🔑 Go to Admin Login</Link>
      </p>
    </div>
  );
}
