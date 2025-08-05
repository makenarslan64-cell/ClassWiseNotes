// // src/app/boards/[boardId]/[classId]/page.tsx
// import { prisma } from '@/lib/prisma';
// import Link from 'next/link';

// export default async function ClassPage({
//   params,
// }: {
//   params: { boardId: string; classId: string };
// }) {
//   const subjects = await prisma.subject.findMany({
//     where: { classId: params.classId },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
//         Select a Subject
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {subjects.map((subj) => (
//           <Link
//             key={subj.id}
//             href={`/boards/${params.boardId}/${params.classId}/${subj.id}`}
//             className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:bg-blue-50 transition"
//           >
//             <h3 className="text-xl font-semibold text-blue-700 text-center">
//               {subj.name}
//             </h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/app/boards/[boardId]/[classId]/page.tsx
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

export default async function ClassPage({
  params,
}: {
  params: { boardId: string; classId: string };
}) {
  const subjects = await prisma.subject.findMany({
    where: { classId: params.classId },
  });

  const colorStyles = [
    { bg: 'bg-blue-50 hover:bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200' },
    { bg: 'bg-green-50 hover:bg-green-100', icon: 'text-green-600', border: 'border-green-200' },
    { bg: 'bg-red-50 hover:bg-red-100', icon: 'text-red-600', border: 'border-red-200' },
    { bg: 'bg-purple-50 hover:bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200' },
    { bg: 'bg-yellow-50 hover:bg-yellow-100', icon: 'text-yellow-600', border: 'border-yellow-200' },
    { bg: 'bg-orange-50 hover:bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200' },
  ];

  const icons = [
    'ri-book-open-line',     // General subject
  'ri-functions',          // Math
  'ri-flask-line',         // Science
  'ri-brush-line',         // Art
  'ri-earth-line',         // Geography
  'ri-time-line',          // History
  'ri-code-line',          // Computer
  'ri-pencil-ruler-2-line' // Design
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mx-auto mb-6">
            <i className="ri-book-line text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Subject</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Select a subject to explore chapters and study notes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {subjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-folder-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Subjects Found</h3>
              <p className="text-gray-600">Subjects for this class are not available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subjects.map((subject, index) => {
                const color = colorStyles[index % colorStyles.length];
                const icon = icons[index % icons.length];

                return (
                  <Link
                    key={subject.id}
                    href={`/boards/${params.boardId}/${params.classId}/${subject.id}`}
                    className="cursor-pointer"
                  >
                    <div className={`${color.bg} ${color.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                      <div className="flex items-center justify-center mb-6">
                        <div className={`w-16 h-16 ${color.bg} ${color.border} border rounded-full flex items-center justify-center`}>
                          <i className={`${icon} text-3xl ${color.icon}`}></i>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                        {subject.name}
                      </h3>
                      <p className="text-gray-600 text-center">
                        Click to explore chapters and notes for {subject.name}.
                      </p>
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
