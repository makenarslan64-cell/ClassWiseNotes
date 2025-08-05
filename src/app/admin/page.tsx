import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminPage() {
  const boards = await prisma.board.findMany({
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Panel – Boards
      </h1>

      {boards.length === 0 ? (
        <p className="text-center text-gray-500">No boards available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {boards.map((board) => (
            <Link
              key={board.id}
              href={`/admin/boards/${board.id}`}
              className="block bg-white border border-gray-200 rounded-xl shadow hover:shadow-md hover:bg-gray-100 transition p-6 text-center text-lg font-medium text-blue-700"
            >
              {board.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
