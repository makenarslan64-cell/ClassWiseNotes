'use client';

export default function AboutSection() {
  return (
    <>
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About ClassWiseNotes</h2>
          <p className="text-gray-600 text-lg">
            Empowering students through organized, accessible, and high-quality educational notes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/burns-169hero2-collabdesign-istock.jpg?w=2880&quality=85"
            alt="Students collaborating with notes"
            className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
          />

          <div className="space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              ClassWiseNotes is a student-first platform designed to help learners find exactly the
              notes they need, when they need them. From board-level organization to chapter-specific
              PDFs, everything is tailored to make studying efficient and focused.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether you're preparing for exams or just revising your concepts, our growing
              collection of notes helps you learn smarter — not harder.
            </p>
            <p className="text-blue-800 font-medium">
              📘 Boards. 🎓 Classes. 📖 Subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-6xl mx-auto px-4 space-y-20">

    {/* Our Mission */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">📚 Our Mission</h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto">
        We aim to support students by providing organized, accurate, and up-to-date academic content.
        Our mission is to empower learners across boards and grades through collaboration, clarity,
        and quality resources.
      </p>
    </div>



    {/* FAQ Section */}
    <div>
      <h2 className="text-4xl font-bold text-blue-800 mb-10 text-center">❓ Frequently Asked Questions</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow border border-blue-100">
          <h3 className="font-semibold text-blue-700 text-lg mb-1">How can I access the notes?</h3>
          <p className="text-gray-600">Browse by Board → Class → Subject → Chapter to view and download the notes.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow border border-blue-100">
          <h3 className="font-semibold text-blue-700 text-lg mb-1">Can I contribute my own notes?</h3>
          <p className="text-gray-600">Currently, only admins can upload notes. A student submission portal will be added soon.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow border border-blue-100">
          <h3 className="font-semibold text-blue-700 text-lg mb-1">Is it free to use?</h3>
          <p className="text-gray-600">Yes, our platform is completely free for all students.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
