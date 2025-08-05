// import { prisma } from '@/lib/prisma';
// import Link from 'next/link';

// export default async function BoardPage({ params }: { params: { boardId: string } }) {
//   const board = await prisma.board.findUnique({
//     where: { id: params.boardId },
//     include: { classes: true },
//   });

//   if (!board)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-red-600 text-xl font-semibold">Board not found</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         {board.name} – Select a Class
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {board.classes.map((cls) => (
//           <Link
//             key={cls.id}
//             href={`/boards/${board.id}/${cls.id}`}
//             className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:bg-blue-50 transition"
//           >
//             <h2 className="text-xl font-semibold text-center text-blue-700">
//               {cls.name}
//             </h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }



import 'remixicon/fonts/remixicon.css';


import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function BoardPage({ params }: { params: { boardId: string } }) {
  const board = await prisma.board.findUnique({
    where: { id: params.boardId },
    include: { classes: true },
  });

  if (!board)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl font-semibold">Board not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mx-auto mb-6">
              <i className="ri-government-line text-3xl"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{board.name} Notes</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Select your class to access subject-wise notes and study materials.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Class</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All classes under {board.name} Board
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {board.classes.map((cls) => (
              <Link key={cls.id} href={`/boards/${board.id}/${cls.id}`} className="cursor-pointer">
                <div className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-3xl text-blue-600"></i>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-600">Notes</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-left mb-3">Class  {cls.name}</h3>

                  <p className="text-gray-600 mb-4">Subject-wise notes available</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-sm text-blue-600 font-medium">
                      View Subjects
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{board.name} Study Resources</h3>
              <p className="text-gray-600 mb-6">
                Notes, questions, and resources aligned with the latest curriculum. Ideal for class prep and exams.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                    <i className="ri-file-text-line text-xl text-blue-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Chapter Notes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-2">
                    <i className="ri-quiz-line text-xl text-green-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Past Papers</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-2">
                    <i className="ri-calculator-line text-xl text-purple-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Formulas</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-2">
                    <i className="ri-lightbulb-line text-xl text-orange-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Solutions</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}