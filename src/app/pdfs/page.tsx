// src/app/pdfs/page.tsx
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Page() {
  const pdfs = await prisma.pdf.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">Available PDFs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pdfs.map((pdf) => (
          <div
            key={pdf.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-800">{pdf.title}</h2>
              <p className="text-slate-600 mt-2 text-sm">{pdf.description || 'No description provided.'}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href={pdf.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                View
              </Link>

              <a
                href={pdf.filePath}
                download
                className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
