// // src/app/boards/[boardId]/[classId]/[subjectId]/page.tsx
// import { prisma } from '@/lib/prisma';
// import Link from 'next/link';

// export default async function SubjectPage({
//   params,
// }: {
//   params: { boardId: string; classId: string; subjectId: string };
// }) {
//   const chapters = await prisma.chapter.findMany({
//     where: { subjectId: params.subjectId },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
//         Select a Chapter
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {chapters.map((ch) => (
//           <Link
//             key={ch.id}
//             href={`/boards/${params.boardId}/${params.classId}/${params.subjectId}/${ch.id}`}
//             className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:bg-blue-50 transition text-center"
//           >
//             <span className="text-blue-700 font-semibold text-xl">
//               {ch.name}
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

export default async function SubjectPage({
  params,
}: {
  params: { boardId: string; classId: string; subjectId: string };
}) {
  const chapters = await prisma.chapter.findMany({
    where: { subjectId: params.subjectId },
  });

  // Different icon-color pairs
  const colorPalette = [
    { icon: 'ri-function-line', color: 'bg-red-100 text-red-600' },        // Math
    { icon: 'ri-hourglass-line', color: 'bg-yellow-100 text-yellow-600' }, // History
    { icon: 'ri-flask-line', color: 'bg-green-100 text-green-600' },       // Science
    { icon: 'ri-earth-line', color: 'bg-blue-100 text-blue-600' },         // Geography
    { icon: 'ri-pencil-ruler-2-line', color: 'bg-purple-100 text-purple-600' }, // Drawing
    { icon: 'ri-lightbulb-line', color: 'bg-orange-100 text-orange-600' }, // IQ/Ideas
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-6">
            <i className="ri-book-line text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Subject - Class
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive study materials organized by chapters. Access notes, examples, and practice exercises.
          </p>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chapters & Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any chapter to access detailed notes and study materials
            </p>
          </div>

          {chapters.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-folder-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Chapters Found</h3>
              <p className="text-gray-600">Chapters for this subject are not available yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 max-w-5xl mx-auto">
              {chapters.map((chapter, index) => {
                const { icon, color } = colorPalette[index % colorPalette.length];

                return (
                  <Link
                    key={chapter.id}
                    href={`/boards/${params.boardId}/${params.classId}/${params.subjectId}/${chapter.id}`}
                    className="block"
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 flex items-center justify-center rounded-full mr-4 ${color}`}>
                            <i className={`${icon} text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{chapter.name}</h3>
                            <p className="text-gray-600 text-sm">
                              {chapter.description || 'No description available.'}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="px-3 py-1 rounded-full text-sm font-semibold border bg-gray-100 text-gray-700 border-gray-200">
                            N/A
                          </span>
                          <span className="text-sm text-blue-600 font-medium">
                            -- Notes
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-end">
                        <span className="text-blue-600 font-medium text-sm mr-2">View Notes</span>
                        <i className="ri-arrow-right-line text-blue-600"></i>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
