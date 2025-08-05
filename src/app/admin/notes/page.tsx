'use client';

import { useState } from 'react';

export default function UploadNotePage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [chapterId, setChapterId] = useState('');

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('chapterId', chapterId);
    if (file) formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(data.success ? 'Note uploaded successfully' : 'Upload failed');
  }

  return (
    <form onSubmit={handleUpload} className="p-6 space-y-4">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Chapter ID"
        value={chapterId}
        onChange={(e) => setChapterId(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Upload Note</button>
    </form>
  );
}
