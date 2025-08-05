'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20classroom%20with%20students%20studying%2C%20bright%20colors%2C%20books%20and%20digital%20devices%2C%20inspirational%20learning%20environment%2C%20soft%20lighting%2C%20contemporary%20design%2C%20motivational%20atmosphere&width=1920&height=600&seq=cta-bg-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have improved their grades with our comprehensive notes and expert tutoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/browse-notes" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
              Start Browsing Notes
            </Link>
            <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
              Book Tutoring Session
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-download-cloud-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Downloads</h3>
              <p className="text-blue-100">Access thousands of notes instantly without any cost.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
              <p className="text-blue-100">Learn from qualified teachers with proven track records.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-blue-100">Students consistently improve their grades by 20-30%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}