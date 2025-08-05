'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { deleteNote } from '@/actions/deleteNote'; // adjust the path as needed
import { prisma } from '@/lib/prisma';

// import { revalidatePath } from 'next/cache';

type Note = {
  imagePath: any;
  id: string;
  title: string;
  description: string;
  filePath: string;
};

export default function ChapterNotesPage() {
  const params = useParams();
  const chapterId = params?.chapterId as string;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch(`/api/notes?chapterId=${chapterId}`);
      if (res.ok) {
        const data = await res.json();
        setNotes(data);
      }
    };
    if (chapterId) fetchNotes();
  }, [chapterId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!selected.type.includes('pdf')) {
      setMessage('Only PDF files are allowed');
      return;
    }
    if (selected.size > 5 * 1024 * 1024) {
      setMessage('File must be less than 5MB');
      return;
    }

    setMessage('');
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !file) {
      setMessage('Title and file are required');
      return;
    }
    

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('chapterId', chapterId);
    formData.append('file', file);
    if (image) {
      formData.append('image', image);
    }

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      setMessage(`Upload failed: ${errorText}`);
      return;
    }

    const newNote = await res.json();
    setNotes([newNote, ...notes]);
    setMessage('Note uploaded successfully');
    setTitle('');
    setDescription('');
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };


  const handleDelete = async (noteId: string) => {
    await fetch(`/api/notes/delete/${noteId}`, {
      method: 'DELETE',
    });
  
    // Filter out the deleted note from the state
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };
  
  

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-10">
      <div className="bg-white shadow rounded-xl p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Note Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter title"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">Image</label>
            <input
  name="image"
  type="file"
  accept="image/*"
  onChange={(e) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  }}  
  className="border rounded-lg px-3 py-2 w-full"
/>
          </div>
         

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Upload Note
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-red-600 font-medium">{message}</p>
        )}
      </div>

      {/* List of Notes */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Uploaded Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">No notes uploaded yet.</p>
        ) : (
          <div className="grid gap-4">
  {notes.map((note) => (
  <div key={note.id} className="bg-white p-4 rounded-lg shadow space-y-2">
    <img src={note.imagePath} alt="Preview" className="w-full h-40 object-cover rounded-md" />
    <h3 className="text-lg font-semibold">{note.title}</h3>
    <p className="text-sm text-gray-600">{note.description}</p>

    <div className="flex gap-4 mt-2">
      <a
        href={note.filePath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Download
      </a>

      <button
        onClick={() => handleDelete(note.id)}
        className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  </div>
))}


          </div>
        )}
      </div>
    </div>
  );
}
