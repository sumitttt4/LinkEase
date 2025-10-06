import React from 'react';
import { Link } from 'react-router-dom';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section id="home" className="py-12 sm:py-16 pb-16 sm:pb-20 text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" 
           style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-gray-700 mb-6 sm:mb-8 shadow-md">
          <span className="text-sm sm:text-base animate-pulse">🟢</span>
          <span className="font-medium">New: <span className="font-semibold text-primary-purple">AI-powered</span> link categorization</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-purple group-hover:translate-x-1 transition-transform hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight px-4">
          <span className="font-noto-serif">All Your</span> <span className="font-caveat gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Links.</span><br />
          <span className="font-noto-serif gradient-text-blue">in One Clean Dashboard.</span>
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed px-4 max-w-2xl mx-auto">
          Save, categorize, and search your links effortlessly <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>so you can focus on what matters.
        </p>
        
        <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 px-4">
          Join 10,000+ users who've transformed their digital workflow
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <Link to="/signup" className="group bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-semibold hover:bg-gray-800 shadow-custom-md hover:shadow-custom-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
            <span className="flex items-center justify-center gap-2">
              Try for Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <button className="group bg-white text-gray-900 border-2 border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
};

export default Hero;
