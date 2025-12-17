import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full py-12 sm:py-16 pb-16 sm:pb-20 text-center relative overflow-hidden bg-[#f8fafc] dark:bg-[#09090b]">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-emerald-100 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-gray-700 mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-all">
          <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span className="font-medium">Stop losing your research. <span className="font-semibold text-emerald-600">Save tabs instantly.</span></span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight px-4">
          <span>Drowning in Tabs?</span><br />
          <span className="gradient-text">Save them in 1 Click.</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed px-4 max-w-2xl mx-auto">
          Don't be afraid to close your browser. LinkEase grabs every open tab and saves it into a neat, dated folder instantly.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 px-4">
          Join 10,000+ users who've transformed their digital workflow
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <Link to="/signup" className="group bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-semibold hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
            <span className="flex items-center justify-center gap-2">
              Get the Free Saver
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <button className="group bg-white text-gray-900 border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 active:scale-95">
            <span className="flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-gray-500 group-hover:text-primary-purple transition-colors" />
              See How It Works
            </span>
          </button>
        </div>

        <div className="perspective-1000 group">
          <div className="transform transition-transform duration-700 group-hover:rotate-x-2 group-hover:rotate-y-2">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
