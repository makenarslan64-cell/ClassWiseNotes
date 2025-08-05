'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_2jrwdso',       // Replace with your EmailJS Service ID
        'template_2ck4ohk',      // Replace with your EmailJS Template ID
        formRef.current,
        'GDv90J52gRqK7JDgS'        // Replace with your EmailJS Public Key
      );

      console.log(result.text);
      setIsSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Email send failed:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">📬 Get in Touch</h2>
          <p className="text-gray-600 text-lg">We’d love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📞 Contact Info</h3>
              <p>Email: <a href="mailto:afshan@example.com" className="text-blue-600 underline">afshan@example.com</a></p>
              <p>Phone: <span className="text-blue-600">+92 300 1234567</span></p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📍 Location</h3>
              <p>Islamabad, Pakistan</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🌐 Social</h3>
              <p>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a> | 
                <a href="#" className="text-blue-600 hover:underline ml-2">GitHub</a> | 
                <a href="#" className="text-blue-600 hover:underline ml-2">Twitter</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input name="name" required type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input name="email" required type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea name="message" required rows={4} placeholder="Your message..." className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
              Send Message
            </button>

            {isSent && <p className="text-green-600 text-sm pt-2">✅ Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
