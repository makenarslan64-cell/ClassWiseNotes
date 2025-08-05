
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: '1',
      name: 'Ayesha Khan',
      grade: 'Class 11 - Federal Board',
      subject: 'Mathematics',
      content: 'The chapter-wise notes helped me understand complex math concepts easily. My grades improved from C to A+ in just 3 months!',
      rating: 5,
      imageUrl: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20Pakistani%20female%20student%2C%20age%2016-17%2C%20wearing%20school%20uniform%2C%20bright%20smile%2C%20clean%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting&width=200&height=200&seq=student-1&orientation=squarish',
      isVisible: true,
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Ahmad Ali',
      grade: 'Class 12 - Punjab Board',
      subject: 'Computer Science',
      content: 'Online tutoring sessions were amazing! The tutor explained programming concepts so clearly. Highly recommend for computer science students.',
      rating: 5,
      imageUrl: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20Pakistani%20male%20student%2C%20age%2017-18%2C%20wearing%20casual%20shirt%2C%20friendly%20expression%2C%20clean%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting&width=200&height=200&seq=student-2&orientation=squarish',
      isVisible: true,
      createdAt: new Date('2024-01-20')
    },
    {
      id: '3',
      name: 'Fatima Sheikh',
      grade: 'Class 10 - Sindh Board',
      subject: 'Mathematics',
      content: 'Free PDF downloads saved me so much money on expensive books. The quality of notes is excellent and covers entire syllabus perfectly.',
      rating: 5,
      imageUrl: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20Pakistani%20female%20student%2C%20age%2015-16%2C%20wearing%20hijab%20and%20school%20uniform%2C%20bright%20smile%2C%20clean%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting&width=200&height=200&seq=student-3&orientation=squarish',
      isVisible: true,
      createdAt: new Date('2024-02-01')
    },
    {
      id: '4',
      name: 'Hassan Malik',
      grade: 'Class 11 - KPK Board',
      subject: 'Computer Science',
      content: 'The tutors are very knowledgeable and patient. They helped me understand difficult topics step by step. My confidence has increased significantly.',
      rating: 4,
      imageUrl: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20Pakistani%20male%20student%2C%20age%2016-17%2C%20wearing%20casual%20polo%20shirt%2C%20friendly%20smile%2C%20clean%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting&width=200&height=200&seq=student-4&orientation=squarish',
      isVisible: true,
      createdAt: new Date('2024-02-10')
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Happy Students' },
    { number: '500+', label: 'Expert Tutors' },
    { number: '10,000+', label: 'Study Materials' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from students who have improved their grades and understanding 
            using our notes and tutoring services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {Array.from({length: testimonial.rating}, (_, i) => (
                      <div key={i} className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-star-fill text-yellow-400"></i>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.grade}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.subject}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
