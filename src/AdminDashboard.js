import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('/api/admin/students', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(() => alert('Access denied or server error'));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name} (Grade {s.grade})</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
