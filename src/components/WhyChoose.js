import React from 'react';

const WhyChoose = () => {
  const bentoFeatures = [
    {
      tag: 'SMART CATEGORIZATION',
      title: 'Organize links while you browse',
      description: 'Automatically categorize your links with AI. We take care of organization so you never lose track of important resources.',
      bgColor: 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100',
      illustration: 'organize',
      bullets: [
        { icon: '🟠', text: 'Create multiple categories and custom tags' },
        { icon: '🟣', text: 'AI-powered auto-categorization for new links' },
        { icon: '🔵', text: 'View everything in an organized dashboard' }
      ]
    },
    {
      tag: 'QUICK SEARCH',
      title: 'Find your links in seconds',
      description: 'Lightning-fast search that understands context. Your gallery recognizes patterns and suggests results tailored for your workflow.',
      bgColor: 'bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100',
      illustration: 'search',
      bullets: [
        { icon: '🟠', text: 'Instant search across all your links' },
        { icon: '🟣', text: 'Smart filters by category, date, and tags' },
        { icon: '🟡', text: 'Contextual suggestions based on your habits' }
      ]
    },
    {
      tag: 'CUSTOM TAGS',
      title: 'Your organization, your way',
      description: 'Create your own personalized organization system with unlimited custom tags. Tag links your way and find them instantly.',
      bgColor: 'bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100',
      illustration: 'tags',
      bullets: [
        { icon: '🟣', text: 'Unlimited custom tags with color coding' },
        { icon: '🔵', text: 'Bulk tag multiple links at once' },
        { icon: '🟢', text: 'Filter and sort by any combination of tags' }
      ]
    },
    {
      tag: 'CLOUD SYNC',
      title: 'Access anywhere, anytime',
      description: 'Real-time synchronization across all your devices. Your links follow you wherever you go with seamless cloud backup.',
      bgColor: 'bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100',
      illustration: 'sync',
      bullets: [
        { icon: '🟢', text: 'Automatic backup to secure cloud storage' },
        { icon: '🔵', text: 'Sync across desktop, mobile, and tablet' },
        { icon: '🟣', text: 'Real-time updates in milliseconds' }
      ]
    }
  ];

  const smallFeatures = [];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 sm:mb-4 tracking-tight font-noto-serif">
          Why Choose LinkEase?
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-10 sm:mb-12 lg:mb-16">
          Powerful features designed to simplify your digital workflow
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {bentoFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-500 hover:shadow-layered cursor-pointer group relative overflow-hidden`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.4), transparent 40%)`
                }}
              ></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-xs font-bold text-purple-600 tracking-widest mb-2 sm:mb-3 block uppercase">
                    {feature.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-5 leading-tight tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 lg:mb-9 leading-relaxed" style={{ lineHeight: '1.7' }}>
                    {feature.description}
                  </p>
                  <div className="space-y-2.5 sm:space-y-3.5">
                    {feature.bullets.map((bullet, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2.5 sm:gap-3.5 opacity-0 animate-scale-in"
                        style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                      >
                        <span className="text-lg sm:text-xl flex-shrink-0 leading-none">{bullet.icon}</span>
                        <span className="text-xs sm:text-sm text-gray-800 leading-relaxed" style={{ lineHeight: '1.6' }}>{bullet.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Illustration */}
                <div className={`flex items-center justify-center mt-6 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1 illustration-shift-left' : 'illustration-shift-right'}`}>
                  {feature.illustration === 'organize' ? (
                    <div className="relative w-full h-80 flex items-center justify-center">
                      {/* Phone with purple eye - Enhanced */}
                      <svg className="w-48 h-80" viewBox="0 0 180 290" fill="none">
                        {/* Phone body */}
                        <rect x="10" y="10" width="160" height="270" rx="24" fill="#7C3AED"/>
                        
                        {/* Screen with subtle gradient */}
                        <defs>
                          <linearGradient id="screenGradient" x1="90" y1="30" x2="90" y2="260" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#F5F3FF"/>
                            <stop offset="100%" stopColor="#FFFFFF"/>
                          </linearGradient>
                        </defs>
                        <rect x="20" y="30" width="140" height="230" rx="16" fill="url(#screenGradient)"/>
                        
                        {/* Eye icon - larger and better proportioned */}
                        <ellipse cx="90" cy="125" rx="50" ry="45" fill="#DDD6FE"/>
                        <circle cx="90" cy="125" r="24" fill="#7C3AED"/>
                        <circle cx="90" cy="120" r="12" fill="white"/>
                        
                        {/* Bottom button */}
                        <rect x="70" y="275" width="40" height="5" rx="2.5" fill="white"/>
                      </svg>
                    </div>
                  ) : feature.illustration === 'search' ? (
                    <div className="relative w-full h-80 flex items-center justify-center">
                      {/* Search bar with results - Simplified & Language-agnostic */}
                      <svg className="w-80 h-72" viewBox="0 0 300 260" fill="none">
                        {/* Search input field */}
                        <rect x="15" y="35" width="210" height="60" rx="30" fill="white" stroke="#DB2777" strokeWidth="3.5"/>
                        
                        {/* Search icon */}
                        <circle cx="45" cy="65" r="12" stroke="#DB2777" strokeWidth="2.5" fill="none"/>
                        <line x1="54" y1="74" x2="60" y2="80" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round"/>
                        
                        {/* Search text placeholder lines */}
                        <rect x="75" y="55" width="80" height="6" rx="3" fill="#F9A8D4" opacity="0.6"/>
                        <rect x="75" y="68" width="50" height="6" rx="3" fill="#F9A8D4" opacity="0.4"/>
                        
                        {/* Pink search button */}
                        <circle cx="245" cy="65" r="26" fill="#DB2777"/>
                        <line x1="240" y1="60" x2="250" y2="70" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                        
                        {/* Search results - Simplified rectangles */}
                        <g transform="translate(30, 125)">
                          {/* Result 1 */}
                          <circle cx="10" cy="15" r="9" fill="#EC4899"/>
                          <rect x="28" y="8" width="140" height="14" rx="7" fill="#FCE7F3"/>
                          <rect x="35" y="11" width="90" height="8" rx="4" fill="#F9A8D4"/>
                          
                          {/* Result 2 */}
                          <circle cx="10" cy="55" r="9" fill="#EC4899"/>
                          <rect x="28" y="48" width="140" height="14" rx="7" fill="#FCE7F3"/>
                          <rect x="35" y="51" width="70" height="8" rx="4" fill="#F9A8D4"/>
                        </g>
                        
                        {/* Yellow decorative dots */}
                        <circle cx="250" cy="170" r="11" fill="#FDE047"/>
                        <circle cx="50" cy="225" r="9" fill="#FDE047"/>
                      </svg>
                    </div>
                  ) : feature.illustration === 'tags' ? (
                    <div className="relative w-full h-80 flex items-center justify-center">
                      {/* Color palette with tags - Enhanced proportions */}
                      <svg className="w-72 h-72" viewBox="0 0 260 260" fill="none">
                        {/* Main container/box */}
                        <rect x="45" y="65" width="170" height="130" rx="18" fill="white" stroke="#F97316" strokeWidth="3.5"/>
                        
                        {/* Four color circles arranged in 2x2 grid - better spacing */}
                        <circle cx="95" cy="110" r="22" fill="#F472B6"/>
                        <circle cx="155" cy="110" r="22" fill="#60A5FA"/>
                        <circle cx="95" cy="165" r="22" fill="#34D399"/>
                        <circle cx="155" cy="165" r="22" fill="#FBBF24"/>
                        
                        {/* Orange accent bar at bottom */}
                        <rect x="75" y="210" width="110" height="12" rx="6" fill="#F97316"/>
                        
                        {/* Yellow star decorations - better positioning */}
                        <circle cx="220" cy="60" r="9" fill="#FBBF24"/>
                        <circle cx="225" cy="185" r="7" fill="#FBBF24"/>
                        
                        {/* Star shape */}
                        <path d="M 40 218 L 43 227 L 52 228 L 45 234 L 47 243 L 40 239 L 33 243 L 35 234 L 28 228 L 37 227 Z" fill="#FBBF24"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="relative w-full h-80 flex items-center justify-center">
                      {/* Cloud with devices - Simplified & Cleaner */}
                      <svg className="w-64 h-72" viewBox="0 0 240 260" fill="none">
                        {/* Cloud top */}
                        <ellipse cx="120" cy="65" rx="58" ry="34" fill="white" stroke="#10B981" strokeWidth="3.5"/>
                        <ellipse cx="88" cy="74" rx="34" ry="22" fill="white" stroke="#10B981" strokeWidth="3.5"/>
                        <ellipse cx="152" cy="74" rx="34" ry="22" fill="white" stroke="#10B981" strokeWidth="3.5"/>
                        
                        {/* Cloud center dot */}
                        <circle cx="120" cy="65" r="11" fill="#10B981"/>
                        
                        {/* Small sync indicators */}
                        <circle cx="88" cy="95" r="7" fill="#34D399"/>
                        <circle cx="152" cy="95" r="7" fill="#34D399"/>
                        
                        {/* Three devices below - Simplified shapes */}
                        {/* Desktop/Monitor - left (largest) */}
                        <rect x="25" y="150" width="55" height="38" rx="6" fill="white" stroke="#10B981" strokeWidth="3"/>
                        <rect x="44" y="188" width="17" height="8" rx="2" fill="#10B981"/>
                        <rect x="35" y="196" width="35" height="4" rx="2" fill="#10B981"/>
                        
                        {/* Tablet - center (medium) */}
                        <rect x="95" y="155" width="45" height="35" rx="5" fill="white" stroke="#10B981" strokeWidth="3"/>
                        <circle cx="117.5" cy="185" r="3" fill="#10B981"/>
                        
                        {/* Mobile - right (smallest) */}
                        <rect x="158" y="145" width="32" height="55" rx="7" fill="white" stroke="#10B981" strokeWidth="3"/>
                        <circle cx="174" cy="192" r="3.5" fill="#10B981"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
