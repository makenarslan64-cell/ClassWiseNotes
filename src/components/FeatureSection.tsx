'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-file-pdf-line',
      title: 'Free PDF Downloads',
      description: 'Download comprehensive notes in PDF format for offline study. All materials are free and instantly accessible.',
      color: 'text-red-600'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Expert Online Tutoring',
      description: 'Connect with qualified teachers for personalized Math and Computer Science tutoring sessions.',
      color: 'text-blue-600'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Chapter-wise Organization',
      description: 'Notes are organized by Class → Subject → Chapter for easy navigation and systematic learning.',
      color: 'text-green-600'
    },
    {
      icon: 'ri-eye-line',
      title: 'Preview Before Download',
      description: 'Built-in PDF viewer lets you preview notes before downloading to ensure they meet your needs.',
      color: 'text-purple-600'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Friendly',
      description: 'Access notes and book tutoring sessions from any device - desktop, tablet, or smartphone.',
      color: 'text-orange-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assured',
      description: 'All notes are reviewed by subject experts and aligned with the latest board curricula and syllabus.',
      color: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ClassWiseNotes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive educational resources and expert tutoring to help students 
            excel in their academic journey across all major education boards in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg mb-4`}>
                <i className={`${feature.icon} text-2xl ${feature.color}`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of students who are already using our platform to improve their grades and understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                Browse Free Notes
              </button>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap">
                Book a Tutoring Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}