'use client';

import { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  name: string;
}

export default function ChapterPage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchChapters = async () => {
    setLoading(true);
    const res = await fetch('/api/chapters', { method: 'POST' });
    const data = await res.json();

    if (res.ok) {
      // Fetch chapters again from DB
      const allChapters = await fetch('/api/get-chapters');
      const allData = await allChapters.json();
      setChapters(allData);
    }

    setLoading(false);
  };

  useEffect(() => {
    // Try to fetch existing chapters on page load
    fetch('/api/get-chapters')
      .then(res => res.json())
      .then(setChapters);
  }, []);

  return (
    <div className="p-6">
      <button
        onClick={fetchChapters}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Create or Load Chapters'}
      </button>

      {chapters.length > 0 ? (
        <ul className="list-disc pl-5">
          {chapters.map((ch) => (
            <li key={ch.id}>{ch.name}</li>
          ))}
        </ul>
      ) : (
        <p>No chapters found.</p>
      )}
    </div>
  );
}
