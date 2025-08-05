import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function ClassPage({
  params,
}: {
  params: { boardId: string; classId: string };
}) {
  const subjects = await prisma.subject.findMany({
    where: { classId: params.classId },
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Subjects
      </h1>

      {subjects.length === 0 ? (
        <p className="text-center text-gray-500">No subjects found for this class.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subjects.map((subj) => (
            <Link
              key={subj.id}
              href={`/admin/boards/${params.boardId}/${params.classId}/${subj.id}`}
              className="block bg-white border border-gray-200 rounded-xl shadow hover:shadow-md hover:bg-gray-100 transition p-6 text-center text-blue-700 font-medium text-lg"
            >
              {subj.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
