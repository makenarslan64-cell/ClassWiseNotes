"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function AddNotePage() {
  const params = useParams<{
    boardId: string;
    classId: string;
    subjectId: string;
    chapterId: string;
  }>();

  const router = useRouter();
  const [name, setName] = useState('');
  const [writer, setWriter] = useState('');
  const [pdf, setPdf] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !writer || !pdf) {
      alert('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('writer', writer);
    formData.append('pdf', pdf);
    formData.append('chapterId', params.chapterId);

    setLoading(true);

    const res = await fetch('/api/upload-note', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      alert('Note uploaded successfully!');
      router.push(
        `/admin/boards/${params.boardId}/${params.classId}/${params.subjectId}/${params.chapterId}`
      );
    } else {
      alert('Failed to upload note.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Note Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Writer Name"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
  name="image"
  type="file"
  accept="image/*"
  className="border rounded-lg px-3 py-2 w-full"
/>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdf(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Uploading...' : 'Upload Note'}
        </button>
      </form>
      
    </div>
  );
}
