import React from 'react';
import Head from 'next/head';
import FlameGridSection from '../components/FlameGridSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Solyn - Find Your Daily Clarity</title>
        <meta name="description" content="Feed Your Mind-Not the Algorithm. Join our closed beta for daily inspiration, AI companion, and beautiful screensavers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
      </Head>

      <div className="min-h-screen bg-white font-['Poppins']">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/Logos/Logo1.png" 
                alt="Solyn Logo" 
                className="w-8 h-8"
              />
              <div className="text-xl font-semibold text-white">Solyn</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white font-medium transition-colors">How It Works</a>
              <a href="#beta" className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all">Join Beta</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Find Your Daily Clarity
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Feed Your Mind-Not the Algorithm
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg">
                    Join Closed Beta
                  </button>
                  <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all hover:-translate-y-0.5">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative animate-float">
                  <img 
                    src="/assets/canva/1.png" 
                    alt="Solyn App Screenshot" 
                    className="max-w-[280px] h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section id="value-props" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Daily Inspiration</h3>
                <p className="text-gray-600 leading-relaxed">Start each day with carefully curated quotes that resonate with your journey. Build streaks and create lasting habits of motivation.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Companion</h3>
                <p className="text-gray-600 leading-relaxed">Intelligent support that understands your unique journey. Get personalized guidance during challenging moments when you need it most.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Beautiful Screensavers</h3>
                <p className="text-gray-600 leading-relaxed">Transform your favorite quotes into stunning custom wallpapers. Carry inspiration with you wherever you go.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Flame Grid Section */}
        <FlameGridSection 
          logoSrc="/assets/Logos/Logo1.png"
          minCount={40}
          cellSize={140}
          maxShiftPx={8}
        />

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">AI Motivation Companion</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Your personal AI companion understands your unique journey and provides tailored motivation exactly when you need it. Whether you're facing a challenge or celebrating a victory, get support that adapts to your emotional state and personal goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Personalized accountability check-ins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Contextual motivation based on your mood and goals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">24/7 support for when you need it most</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/canva/2.png" 
                  alt="AI Interaction Screen" 
                  className="max-w-[300px] h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 flex justify-center">
                <img 
                  src="/assets/canva/4.png" 
                  alt="Daily Quote Screen" 
                  className="max-w-[300px] h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">Daily Quotes & Challenges</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Build lasting habits with our streak system and gamified approach to personal growth. Each day brings new inspiration carefully selected to align with your current goals and challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Curated quotes that match your journey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Streak tracking to build consistency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Challenges for personal growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">Create Custom Screensavers</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transform your favorite quotes into beautiful custom wallpapers and screensavers. Choose from elegant typography styles, colors, and layouts to create inspiration that fits your aesthetic perfectly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Multiple typography and color options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">High-resolution exports for any device</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Save and share your favorite designs</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/assets/canva/3.png" 
                  alt="Screensaver Creator" 
                  className="max-w-[300px] h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beta Signup */}
        <section id="beta" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold mb-6">Be Among the First</h2>
            <p className="text-xl mb-8 opacity-90">Join our closed beta and help shape the future of motivation</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
            <p className="text-sm opacity-80 leading-relaxed">
              Get early access, provide feedback, and be part of our growing community of motivated individuals.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
              <div className="flex-1 min-w-[250px]">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/assets/Logos/Logo1.png" 
                    alt="Solyn Logo" 
                    className="w-6 h-6"
                  />
                  <h3 className="text-xl font-semibold">Solyn</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Find your daily clarity through personalized motivation.
                </p>
              </div>
              <div className="flex gap-16">
                <div>
                  <h4 className="font-medium mb-4">Product</h4>
                  <div className="space-x-6">
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                    <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
                    <a href="#beta" className="text-gray-400 hover:text-white transition-colors">Join Beta</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Company</h4>
                  <div className="space-x-6">
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                    <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Legal</h4>
                  <div className="space-x-6">
                    <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a5 5 0 015 5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11a5 5 0 015-5z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-gray-400 text-sm">&copy; 2025 Solyn. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
