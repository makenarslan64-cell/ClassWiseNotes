export default function PrivacyPolicyPage() {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">🔐 Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              Your trust is important to us. Here's how we handle your data at ClassWiseNotes.
            </p>
          </div>
  
          <div className="space-y-10 text-gray-700 text-base leading-relaxed bg-white p-8 rounded-2xl shadow-md border border-blue-100">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. Information We Collect</h2>
              <p>
                We may collect basic user information like name and email only if you contact us or sign up
                for updates. No sensitive data is collected unless explicitly provided by the user.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. How We Use Your Data</h2>
              <p>
                Your data is used strictly for improving the platform, responding to inquiries, and
                personalizing your experience. We do not sell, trade, or share your information with
                third parties.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. Cookies</h2>
              <p>
                We use minimal cookies for basic site functionality and performance analytics. You can
                disable cookies through your browser settings at any time.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to keep your data safe. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To do so,
                please contact us using the form on the Contact page.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Policy Updates</h2>
              <p>
                This policy may be updated occasionally. Any changes will be reflected on this page with
                a revised "Last Updated" date.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">7. Contact</h2>
              <p>
                If you have any questions or concerns about your privacy, please reach out via our{' '}
                <a href="/contact" className="text-blue-600 underline">Contact page</a>.
              </p>
            </div>
  
            <p className="text-sm text-right text-gray-400">Last Updated: August 1, 2025</p>
          </div>
        </div>
      </section>
    );
  }
  