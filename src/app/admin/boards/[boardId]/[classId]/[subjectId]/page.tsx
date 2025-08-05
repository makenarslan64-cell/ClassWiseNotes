import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

interface SubjectPageProps  {
  params: {
    boardId: string;
    classId: string;
    subjectId: string;
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { boardId, classId, subjectId } = params;

  const chapters = await prisma.chapter.findMany({
    where: { subjectId },
    orderBy: { number: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Chapters
      </h1>

      {chapters.length > 0 ? (
        <div className="grid gap-4 mb-10">
          {/* {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/admin/boards/${boardId}/${classId}/${subjectId}/${chapter.id}`}
              className="block bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4"
            >
              <span className="text-blue-700 font-semibold">
                Chapter {chapter.number}:
              </span>{' '}
              <span className="text-gray-800">{chapter.name}</span>
            </Link>
          ))} */}
          {chapters.map((chapter) => (
  <div
    key={chapter.id}
    className="flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4"
  >
    <Link
      href={`/admin/boards/${boardId}/${classId}/${subjectId}/${chapter.id}`}
      className="flex-1"
    >
      <span className="text-blue-700 font-semibold">
        Chapter {chapter.number}:
      </span>{' '}
      <span className="text-gray-800">{chapter.name}</span>
    </Link>

    <form
      action={async () => {
        'use server';
        await prisma.chapter.delete({
          where: { id: chapter.id },
        });
        revalidatePath(`/admin/boards/${boardId}/${classId}/${subjectId}`);
      }}
    >
      <button
        type="submit"
        className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </form>
  </div>
))}

        </div>
      ) : (
        <p className="text-center text-gray-500 mb-10">
          No chapters found for this subject.
        </p>
      )}

      <form
        className="bg-white border border-gray-200 rounded-xl shadow p-6 space-y-4"
        action={async (formData) => {
          'use server';
          const number = Number(formData.get('number'));
          const name = String(formData.get('name'));

          if (!number || !name) return;

          await prisma.chapter.create({
            data: {
              number,
              name,
              subjectId,
            },
          });

          revalidatePath(`/admin/boards/${boardId}/${classId}/${subjectId}`);
        }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New Chapter
        </h2>

        <div>
          <label className="block mb-1 text-sm text-gray-700">
            Chapter Number
          </label>
          <input
            name="number"
            type="number"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 1"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">
            Chapter Name
          </label>
          <input
            name="name"
            type="text"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter chapter name"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Chapter
        </button>
      </form>
    </div>
  );
}
