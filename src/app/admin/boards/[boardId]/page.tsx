import { prisma } from '@/lib/prisma';
import Link from 'next/link';


export default async function BoardPage({
  params,
}: {
  params: { boardId: string };
}) {
  const classes = await prisma.class.findMany({
    where: { boardId: params.boardId },
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Classes
      </h1>

      {classes.length === 0 ? (
        <p className="text-center text-gray-500">No classes found for this board.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {classes.map((cls) => (
            <Link
              key={cls.id}
              href={`/admin/boards/${params.boardId}/${cls.id}`}
              className="block bg-white border border-gray-200 rounded-xl shadow hover:shadow-md hover:bg-gray-100 transition p-6 text-center text-blue-700 font-medium text-lg"
            >
              {cls.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
