export default function TermsOfServicePage() {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">📜 Terms of Service</h1>
            <p className="text-gray-600 text-lg">
              Please read these terms carefully before using ClassWiseNotes.
            </p>
          </div>
  
          <div className="space-y-10 text-gray-700 text-base leading-relaxed bg-white p-8 rounded-2xl shadow-md border border-blue-100">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using ClassWiseNotes, you agree to be bound by these Terms of Service.
                If you do not agree, you may not access the site.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. Use of Content</h2>
              <p>
                All notes, resources, and content are provided for educational use only. Reproduction,
                redistribution, or commercial use without permission is prohibited.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. User Responsibilities</h2>
              <p>
                Users are responsible for their own behavior on the platform. Do not upload or share
                harmful, misleading, or copyrighted content without authorization.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms or engage
                in abusive behavior, without prior notice.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Disclaimer of Warranties</h2>
              <p>
                The content is provided “as is” without warranties of any kind. We do not guarantee the
                accuracy, completeness, or usefulness of the notes shared.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Limitation of Liability</h2>
              <p>
                ClassWiseNotes shall not be held liable for any damages or losses resulting from the use
                of our platform or the content available on it.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">7. Modifications</h2>
              <p>
                We may update these terms at any time. Continued use of the platform after changes
                implies acceptance of the revised terms.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">8. Contact</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us via the{' '}
                <a href="/contact" className="text-blue-600 underline">Contact page</a>.
              </p>
            </div>
  
            <p className="text-sm text-right text-gray-400">Last Updated: August 1, 2025</p>
          </div>
        </div>
      </section>
    );
  }
  