import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Sevii</title>
        <meta name="description" content="Sevii's Privacy Policy - How we protect and handle your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-white font-['Poppins']">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-[60px] md:h-[70px]">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/assets/Logos/Logo1.png" 
                alt="Sevii Logo" 
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <div className="text-lg md:text-xl font-semibold text-white">Sevii</div>
            </Link>
            <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors">
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20 md:pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: 8/31/2025</p>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                  <p>
                    At Sevii, we're committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding your data when you use our motivation and inspiration app.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Information You Provide</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Email address when you sign up for our beta or subscribe to updates</li>
                        <li>Personal goals and preferences you set within the app</li>
                        <li>Interactions with our AI companion for personalized motivation</li>
                        <li>Feedback and communications you send to us</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Information We Automatically Collect</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>App usage data and engagement metrics</li>
                        <li>Device information and technical specifications</li>
                        <li>Log data including IP addresses and timestamps</li>
                        <li>Analytics data to improve our services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide personalized daily quotes and motivation tailored to your goals</li>
                    <li>Enable our AI companion to offer contextual support and guidance</li>
                    <li>Track your progress and maintain streak information</li>
                    <li>Create and customize screensavers based on your preferences</li>
                    <li>Send you updates about new features and improvements</li>
                    <li>Analyze usage patterns to enhance our app's effectiveness</li>
                    <li>Provide customer support and respond to your inquiries</li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                    <p className="font-semibold text-red-800">Important AI Disclaimer:</p>
                    <p className="text-red-700">Our AI companion is not a substitute for professional advice of any kind (including medical, mental health, legal, or financial). AI responses may sometimes be inaccurate, misleading, or harmful. For emergencies or crisis situations, contact 911 or your local emergency services immediately.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                  <p>
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Secure cloud infrastructure with reputable providers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
                  <p>
                    We do not sell, rent, or trade your personal information. We may share your data only in these limited circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>With trusted service providers who help us operate our app (under strict confidentiality agreements)</li>
                    <li>In case of a business merger or acquisition (with advance notice to users)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                  <p>You have the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                  <p>
                    We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will delete your personal data within 30 days, except where we're required by law to retain certain information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Age Requirements and Children's Privacy</h2>
                  <p>
                    You must be at least 13 years old (or 16 if required by the laws of your country) to use Sevii. We do not knowingly collect personal information from children under the required minimum age. If you become aware that a child has provided us with personal information, please contact us immediately, and we will take steps to remove such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also send you an email notification.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                  <p>
                    This Privacy Policy is governed by the laws of the State of Utah, United States, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p><strong>Email:</strong> latenitellc@gmail.com</p>
                    <p><strong>Address:</strong> Sevii Privacy Team</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/assets/Logos/Logo1.png" 
                alt="Sevii Logo" 
                className="w-6 h-6"
              />
              <h3 className="text-xl font-semibold">Sevii</h3>
            </div>
            <p className="text-gray-400 mb-4">Find your daily clarity through personalized motivation.</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
