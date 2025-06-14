import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/"    element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

