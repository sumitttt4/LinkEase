import React from 'react';

const DashboardPreview = () => {
  const categories = [
    { icon: '🎨', badge: 'Design', badgeColor: 'bg-primary-purple', title: 'Design Resources', links: '24 links', progressColor: 'bg-primary-purple' },
    { icon: '⚡', badge: 'Dev', badgeColor: 'bg-primary-purple', title: 'Development Tools', links: '18 links', progressColor: 'bg-primary-purple' },
    { icon: '📊', badge: 'Work', badgeColor: 'bg-custom-cyan', title: 'Project Management', links: '32 links', progressColor: 'bg-custom-cyan' },
    { icon: '📚', badge: 'Learn', badgeColor: 'bg-custom-green', title: 'Learning Materials', links: '15 links', progressColor: 'bg-custom-green' },
    { icon: '✨', badge: 'Ideas', badgeColor: 'bg-custom-orange', title: 'Inspiration Gallery', links: '27 links', progressColor: 'bg-custom-orange' },
    { icon: '👥', badge: 'Client', badgeColor: 'bg-custom-red', title: 'Client References', links: '12 links', progressColor: 'bg-custom-red' },
  ];

  return (
    <div className="relative animate-scale-in">
      {/* Backdrop Blur Layer */}
      <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/40 via-blue-100/40 to-cyan-100/40 blur-3xl rounded-3xl opacity-60"></div>
      
      <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl max-w-4xl mx-auto backdrop-blur-subtle border border-white/50 hover:shadow-[0_20px_80px_rgba(99,102,241,0.15)] transition-all duration-500" 
           style={{ background: 'linear-gradient(135deg, rgba(255,245,245,0.95) 0%, rgba(255,241,248,0.95) 50%, rgba(240,249,255,0.95) 100%)' }}>
        
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div>
              <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-gray-900">LinkEase Dashboard</h3>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Organize your digital life</p>
            </div>
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl mb-4 sm:mb-7">
          <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="5" stroke="#999" strokeWidth="1.5"/>
            <path d="M11 11L14 14" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search your links..." 
            className="flex-1 outline-none text-xs sm:text-sm bg-transparent"
          />
          <span className="bg-gray-100 border border-gray-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-xs text-gray-500 font-semibold hidden sm:inline">⌘K</span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-5 sm:mb-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="tooltip group bg-white border border-gray-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300/80 shadow-sm hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
              data-tooltip={`View all ${category.title}`}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span className="text-xl sm:text-2xl lg:text-3xl transform group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <span className={`${category.badgeColor} text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-semibold shadow-sm group-hover:shadow-md transition-shadow`}>
                  {category.badge}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm lg:text-[15px] font-semibold text-gray-900 mb-1 sm:mb-1.5 group-hover:text-primary-purple transition-colors">{category.title}</h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{category.links}</p>
              <div className="w-full h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className={`${category.progressColor} h-full rounded-full transition-all duration-500 group-hover:w-full`} style={{ width: '70%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-around items-center pt-4 sm:pt-7 border-t border-gray-900/8 gap-3 sm:gap-0">
          <div className="text-center w-full sm:w-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5 sm:mb-1 whitespace-nowrap">128</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Total Links</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-900/8"></div>
          <div className="text-center w-full sm:w-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5 sm:mb-1 whitespace-nowrap">6</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Categories</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-900/8"></div>
          <div className="text-center w-full sm:w-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5 sm:mb-1 whitespace-nowrap">94%</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Organized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
