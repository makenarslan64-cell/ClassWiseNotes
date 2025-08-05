'use client';

import { useState } from 'react';

export default function CreateSubject() {
  const [name, setName] = useState('');
  const [classId, setClassId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/subjects', {
      method: 'POST',
      body: JSON.stringify({ name, classId }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Subject created');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Subject Name" className="border p-2" />
      <input value={classId} onChange={(e) => setClassId(e.target.value)} placeholder="Class ID" className="border p-2" />
      <button className="bg-purple-600 text-white px-4 py-2">Create Subject</button>
    </form>
  );
}
