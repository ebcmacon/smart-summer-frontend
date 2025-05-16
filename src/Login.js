import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!resp.ok) throw new Error('Invalid credentials');
      const { token } = await resp.json();
      localStorage.setItem('token', token);
      setToken(token);
      navigate('/admin');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: 'auto' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="admin@smart.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="summer2025"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}
