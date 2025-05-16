import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name:'', grade:'' });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem('token');
  const headers = { 
    'Content-Type':'application/json',
    Authorization:`Bearer ${token}`
  };

  // Fetch list
  const load = () =>
    fetch('/api/admin/students',{ headers })
      .then(r=>r.json()).then(setStudents);

  useEffect(load, []);

  // Handle add/update
  const submit = e => {
    e.preventDefault();
    const url = editId
      ? `/api/admin/students/${editId}`
      : '/api/admin/students';
    const method = editId ? 'PUT' : 'POST';
    fetch(url, {
      method, headers, body: JSON.stringify(form)
    })
      .then(()=> {
        setForm({ name:'', grade:'' });
        setEditId(null);
        load();
      });
  };

  // Handle delete
  const remove = id =>
    fetch(`/api/admin/students/${id}`, {
      method:'DELETE', headers
    }).then(load);

  // Start edit
  const edit = s => {
    setForm({ name:s.name, grade:s.grade });
    setEditId(s.id);
  };

  return (
    <div style={{ padding:40, maxWidth:600, margin:'auto' }}>
      <h2>Admin Dashboard</h2>

      <form onSubmit={submit} style={{ marginBottom:20 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e=>setForm({...form,name:e.target.value})}
          required style={{ margin:'0 8px' }}
        />
        <input
          placeholder="Grade"
          type="number"
          value={form.grade}
          onChange={e=>setForm({...form,grade:e.target.value})}
          required style={{ margin:'0 8px',width:60 }}
        />
        <button type="submit">
          {editId ? 'Update' : 'Add'} Student
        </button>
        {editId && (
          <button type="button" onClick={()=>{setEditId(null); setForm({name:'',grade:''})}}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        {students.map(s=>(
          <li key={s.id} style={{ marginBottom:8 }}>
            {s.name} (Grade {s.grade})
            {' '}
            <button onClick={()=>edit(s)}>✏️</button>
            <button onClick={()=>remove(s.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
