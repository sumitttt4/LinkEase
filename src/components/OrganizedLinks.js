import React, { useState } from 'react';

const OrganizedLinks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: '📁', iconColor: 'text-primary-purple', bgColor: 'bg-blue-50', label: 'Work Projects', count: '24 links' },
    { icon: '📁', iconColor: 'text-purple-600', bgColor: 'bg-purple-50', label: 'Design Resources', count: '18 links' },
    { icon: '📁', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50', label: 'Learning', count: '12 links' },
  ];

  const links = [
    { dot: 'bg-primary-purple', title: 'Figma Design System', url: 'figma.com', badge: 'Design', badgeColor: 'bg-primary-purple' },
    { dot: 'bg-purple-600', title: 'React Documentation', url: 'react.dev', badge: 'Dev', badgeColor: 'bg-purple-600' },
    { dot: 'bg-custom-cyan', title: 'Tailwind CSS Guide', url: 'tailwindcss.com', badge: 'CSS', badgeColor: 'bg-custom-cyan' },
  ];

  return (
    <section id="preview" className="py-12 sm:py-16 lg:py-24" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #FEF5F5 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 sm:mb-4 tracking-tight font-noto-serif">
          Your Links, Beautifully Organized
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-10 sm:mb-12 lg:mb-16">
          Experience the clean, intuitive interface that makes link management a joy
        </p>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-layered" style={{ background: 'linear-gradient(135deg, #FEF2F2 0%, #FAF5FF 50%, #ECFDF5 100%)' }}>
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold cursor-pointer transition-all flex-1 ${tab.bgColor}`}
              >
                <span className={`text-xl sm:text-2xl ${tab.iconColor}`}>{tab.icon}</span>
                <div className="flex-1">
                  <div className={`font-bold ${tab.iconColor} text-xs sm:text-sm`}>{tab.label}</div>
                  <div className={`text-xs ${tab.iconColor} opacity-70 mt-0.5 hidden sm:block`}>{tab.count}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Links List */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4 sm:mb-5">Recent Links</h3>
            
            {links.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl mb-2 sm:mb-3 last:mb-0 transition-all hover:bg-pink-50 cursor-pointer bg-white border border-transparent hover:border-pink-100"
              >
                <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${link.dot} flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{link.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{link.url}</p>
                  </div>
                </div>
                <span className={`${link.badgeColor} text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-semibold flex-shrink-0 ml-2`}>
                  {link.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizedLinks;
