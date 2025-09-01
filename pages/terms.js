import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Sevii</title>
        <meta name="description" content="Sevii's Terms of Service - Legal terms and conditions for using our motivation app." />
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last updated: 8/31/2025</p>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                  <p>
                    By accessing and using Sevii ("the App," "our Service"), you accept and agree to be bound by these Terms. If you do not agree, please do not use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                  <p>
                    Sevii is a personal motivation and inspiration app that provides:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Daily curated quotes and motivational content</li>
                    <li>An AI-powered companion for personalized support and guidance</li>
                    <li>Progress tracking and streak maintenance features</li>
                    <li>Custom screensaver and wallpaper creation tools</li>
                    <li>Goal setting and accountability features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                  <div className="space-y-4">
                    <p>
                      To access certain features of Sevii, you must create an account. You agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate, current, and complete information during registration</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Maintain the security of your password and account</li>
                      <li>Accept responsibility for all activities under your account</li>
                      <li>Notify us immediately of any unauthorized account use</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                  <p>You agree not to use Sevii to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Violate any local, state, national, or international law</li>
                    <li>Transmit any harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Use the Service for any unauthorized commercial purpose</li>
                    <li>Impersonate any person or entity</li>
                    <li>Collect or harvest personal information of other users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI Companion and Content</h2>
                  <div className="space-y-4">
                    <p>
                      Our AI companion provides motivational support and guidance. Please understand:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The AI is not a substitute for professional advice of any kind (including medical, mental health, legal, or financial).</li>
                      <li>AI responses are generated algorithmically and may sometimes be inaccurate, misleading, or harmful.</li>
                      <li>You are solely responsible for your actions and decisions. Do not rely on the Service for emergencies, therapy, or crisis situations.</li>
                    </ul>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-red-800">Emergency Disclaimer:</p>
                      <p className="text-red-700">If you are experiencing thoughts of self-harm, a medical emergency, or any crisis, do not use this App. Call 911 (or your local emergency number) immediately.</p>
                    </div>
                    <p className="font-medium">
                      Sevii disclaims all responsibility for any harm, injury, or loss that may result from reliance on AI responses.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                  <div className="space-y-4">
                    <p>
                      The Service and its original content, features, and functionality are owned by Sevii and protected by international intellectual property laws.
                    </p>
                    <p>
                      You retain ownership of content you create (such as custom screensavers), but grant us a license to host and display it for the purpose of providing the Service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using the Service, you agree to the collection and use of your data in accordance with our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Beta Testing</h2>
                  <p>
                    If you participate in our beta program:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>You understand the Service may contain bugs or incomplete features</li>
                    <li>You agree to provide feedback and report issues</li>
                    <li>Features may change or be removed without notice</li>
                    <li>Beta access may be terminated at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers</h2>
                  <div className="space-y-4">
                    <p>
                      THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. SOLYN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                    <p>
                      We do not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SOLYN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE OR RELIANCE ON ANY AI-POWERED CONTENT.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless Sevii, its officers, directors, employees, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or expenses (including attorney's fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Your use of and access to the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your reliance on any AI-generated content</li>
                    <li>Any third-party claim related to your actions or content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Age Restrictions</h2>
                  <p>
                    You must be at least 13 years old (or 16 if required by the laws of your country) to use Sevii. By using the Service, you represent and warrant that you meet this requirement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
                  <p>
                    We may suspend or terminate your account and access to the Service immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the Service will cease immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the App. Continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Utah, United States, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p><strong>Email:</strong> legal@solyn.app</p>
                    <p><strong>Address:</strong> Sevii Legal Team</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Severability</h2>
                  <p>
                    If any provision of these Terms is found unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining Terms will remain in full force and effect.
                  </p>
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
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}