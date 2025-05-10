import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="admin@smart.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /><br />
        <input
          type="password"
          placeholder="summer2025"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
