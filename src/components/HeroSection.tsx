'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20environment%20with%20bright%20blue%20and%20green%20colors%2C%20students%20studying%20with%20books%20and%20digital%20devices%2C%20clean%20minimalist%20background%20with%20geometric%20shapes%2C%20professional%20photography%20style%2C%20bright%20lighting%2C%20educational%20atmosphere%2C%20contemporary%20design%20elements&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-blue-900/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full text-left max-w-6xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Board-wise Class Notes & 
              <span className="text-blue-600"> Expert Online Tutoring</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Access comprehensive study notes for Federal, Punjab, Sindh & KPK boards. 
              Get personalized online tutoring in Mathematics and Computer Science from expert teachers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/browse-notes" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                Browse Notes
              </Link>
              <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                Get Online Tutoring
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                <span>Free PDF Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                <span>Expert Tutors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                <span>All Boards Covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}