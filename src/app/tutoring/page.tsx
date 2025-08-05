// src/app/tutoring/page.tsx
'use client';

import React from "react";

export default function TutoringPage() {
  return (
    <>
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">📚 Tutoring Services</h1>
          <p className="text-lg text-gray-600 mt-4">Personalized tutoring to help students excel in academics and beyond.</p>
        </div>

        {/* Features / Subjects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Mathematics',
              description: 'From basic arithmetic to advanced calculus, we make math easier and enjoyable.',
              icon: '➕'
            },
            {
              title: 'Computer Science',
              description: 'Master programming, IT fundamentals, and software concepts with hands-on guidance.',
              icon: '💻'
            },
            {
              title: 'Physics',
              description: 'Understand concepts with real-world examples and boost your problem-solving skills.',
              icon: '🔬'
            },
            {
              title: 'English Language',
              description: 'Improve grammar, writing, and communication skills with tailored sessions.',
              icon: '📖'
            },
            {
              title: 'Exam Preparation',
              description: 'Focused prep for board exams, university tests, or entry assessments.',
              icon: '📝'
            },
            {
              title: 'Homework Help',
              description: 'Stuck on an assignment? Get help on tricky topics and improve your understanding.',
              icon: '📚'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border-t-4 border-blue-600">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6">Contact us now to schedule a free consultation or your first tutoring session.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition"
          >
            Contact Now
          </a>
        </div>
      </div><section className="mt-24 bg-white py-16 px-6 rounded-xl shadow-inner ">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">💬 What Students Say</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        name: 'Ayesha Khan',
        feedback:
          'Ms. Afshan made Computer Science so easy to understand. I improved my grades and gained confidence!',
      },
      {
        name: 'Zain Ahmed',
        feedback:
          'Her way of explaining math problems is amazing. Now I actually enjoy solving them!',
      },
      {
        name: 'Fatima Ali',
        feedback:
          'I was struggling with exam preparation, but thanks to her strategies, I aced all my tests.',
      },
    ].map((student, i) => (
      <div
        key={i}
        className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow hover:shadow-md transition"
      >
        <p className="text-gray-700 italic">“{student.feedback}”</p>
        <p className="mt-4 font-semibold text-blue-800">— {student.name}</p>
      </div>
    ))}
  </div>
</section>


    </section>
   


    </>
  );
}
