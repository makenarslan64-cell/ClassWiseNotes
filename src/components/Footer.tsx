
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-book-open-line text-2xl text-blue-400"></i>
              </div>
              <span className="font-['Pacifico'] text-xl text-blue-400">ClassWiseNotes</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your one-stop platform for board-wise class notes and expert online tutoring. 
              Empowering students across Pakistan with quality educational resources.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-facebook-fill text-xl text-gray-400 hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-twitter-fill text-xl text-gray-400 hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-instagram-line text-xl text-gray-400 hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-youtube-fill text-xl text-gray-400 hover:text-blue-400 transition-colors"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/browse-notes" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Browse Notes
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/tutoring" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Online Tutoring
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Education Boards</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Federal Board</div>
              <div className="text-gray-400">Punjab Board</div>
              <div className="text-gray-400">Sindh Board</div>
              <div className="text-gray-400">KPK Board</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ClassWiseNotes. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/term-of-service" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}