'use client';

import { useState } from 'react';

export default function CreateClass() {
  const [name, setName] = useState('');
  const [boardId, setBoardId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/classes', {
      method: 'POST',
      body: JSON.stringify({ name, boardId }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Class created');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Class Name" className="border p-2" />
      <input value={boardId} onChange={(e) => setBoardId(e.target.value)} placeholder="Board ID" className="border p-2" />
      <button className="bg-green-600 text-white px-4 py-2">Create Class</button>
    </form>
  );
}
