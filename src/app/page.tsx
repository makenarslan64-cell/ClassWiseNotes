// import { prisma } from '@/lib/prisma';
// import Link from 'next/link';
// import { GraduationCap } from 'lucide-react'; // Icon from lucide-react

// export default async function HomePage() {
//   const boards = await prisma.board.findMany();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
//       <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
//         📘 Select a Board
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {boards.map((board) => (
//           <Link
//             key={board.id}
//             href={`/boards/${board.id}`}
//             className="group bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
//           >
//             <div className="flex flex-col items-center justify-center space-y-4">
//               <GraduationCap className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
//               <h2 className="text-xl font-semibold text-blue-800 text-center">
//                 {board.name}
//               </h2>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// 'use client';

import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { Board } from '@prisma/client'; // assuming type
import { prisma } from '@/lib/prisma';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default async function HomePage() {
  const boards: Board[] = await prisma.board.findMany();

  const getColorClasses = (index: number) => {
    const colors = [
      {
        bg: 'bg-blue-50 hover:bg-blue-100',
        icon: 'text-blue-600',
        border: 'border-blue-200 hover:border-blue-300',
      },
      {
        bg: 'bg-green-50 hover:bg-green-100',
        icon: 'text-green-600',
        border: 'border-green-200 hover:border-green-300',
      },
      {
        bg: 'bg-purple-50 hover:bg-purple-100',
        icon: 'text-purple-600',
        border: 'border-purple-200 hover:border-purple-300',
      },
      {
        bg: 'bg-orange-50 hover:bg-orange-100',
        icon: 'text-orange-600',
        border: 'border-orange-200 hover:border-orange-300',
      },
    ];
    return colors[index % colors.length];
  };

  return (
    <>
    <HeroSection/>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Education Board
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your board to access chapter-wise notes, past papers, and study materials
            specifically designed for your curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boards.map((board, index) => {
            const colors = getColorClasses(index);
            return (
              <Link key={board.id} href={`/boards/${board.id}`} className="cursor-pointer">
                <div
                  className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} ${colors.border} border rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <GraduationCap className={`text-2xl ${colors.icon}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{board.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                   Board of Intermediate & Secondary Education
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                 Thousands of students
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find your board? We're constantly adding more educational boards.
          </p>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
          >
            Contact us to request your board →
          </Link>
        </div>
      </div>
    </section>
    <FeaturesSection/>
        <TestimonialsSection/>
        <CTASection/>
    </>
    
  );
}
