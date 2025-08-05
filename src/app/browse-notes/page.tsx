'use client';

import { useEffect, useState } from 'react';

type Note = {
  id: string;
  title: string;
  description: string;
  filePath: string;
  imagePath: string;
};

export default function BrowseNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/notes/all'); // Adjust route if needed
        const data = await res.json();
        setNotes(data.notes || []);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) =>
    `${note.title} ${note.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Browse Educational Notes</h1>
          <p className="text-gray-600">Search, preview, and download curated notes</p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search notes by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 border border-blue-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500">No notes found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={note.imagePath}
                  alt={note.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col gap-2 flex-grow">
                  <h2 className="text-xl font-semibold text-blue-800">{note.title}</h2>
                  <p className="text-gray-600 text-sm flex-grow">{note.description}</p>
                  <a
                    href={note.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
                  >
                    <i className="ri-download-2-line mr-1"></i>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
