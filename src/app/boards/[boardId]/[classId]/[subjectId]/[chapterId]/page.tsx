// import { prisma } from '@/lib/prisma';

// export default async function ChapterPage({
//   params,
// }: {
//   params: { chapterId: string };
// }) {
//   const notes = await prisma.note.findMany({
//     where: { chapterId: params.chapterId },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Available Notes</h1>

//       {notes.length === 0 ? (
//         <p className="text-center text-gray-500">No notes found for this chapter.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {notes.map((note) => (
//             <div
//               key={note.id}
//               className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">{note.title}</h2>
//               <p className="text-gray-600 text-sm mb-4 text-center">{note.description}</p>
//               <div className="text-center">
//                 <a
//                   href={`/uploads/${note.filePath}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
//                 >
//                   Download PDF
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function ChapterPage({
  params,
}: {
  params: { chapterId: string };
}) {
  const notes = await prisma.note.findMany({
    where: { chapterId: params.chapterId },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/browse-notes" className="hover:underline text-blue-600">Browse Notes</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Chapter Notes</span>
        </nav>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Chapter Notes
        </h1>

        {notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes found for this chapter.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
              >
                {/* <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{note.title}</h2>
                  {note.description && (
                    <p className="text-sm text-gray-600 mb-3">{note.description}</p>
                  )}
                </div> */}

{/* 
                <div className="text-center mt-auto">
                  <a
                    href={`/uploads/${note.filePath}`}
                    download
                    className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Download PDF
                  </a>
                </div> */}

<div className="bg-white p-6 rounded shadow space-y-4">
  {note.imagePath && (
    <img
      src={note.imagePath}
      alt={note.title}
      className="w-full max-w-sm object-cover rounded"
    />
  )}
  <h1 className="text-2xl font-bold">{note.title}</h1>
  <p className="text-gray-700">{note.description}</p>

  <a
    href={note.filePath}
    download
    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Download Note
  </a>
</div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
