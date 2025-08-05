// // src/components/Header.tsx
// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white p-4 shadow">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold tracking-wide">
//           SubjectWiseNotes
//         </Link>
//         <nav className="space-x-4 text-sm">
//         </nav>
//       </div>
//     </header>
//   );
// }
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-book-open-line text-2xl text-blue-600"></i>
            </div>
            <span className="font-['Pacifico'] text-xl text-blue-600">ClassWiseNotes</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/browse-notes" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Browse Notes
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Admin
            </Link>
            <Link href="/tutoring" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Get Tutoring
            </Link>
          </nav>

          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-gray-700`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/browse-notes" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Browse Notes
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/admin/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Admin
              </Link>
              <Link href="/tutoring" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center cursor-pointer">
                Get Tutoring
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}