import React from 'react';
import { Layers, Search, Tag, Cloud, CheckCircle, Zap, Shield, Smartphone, ArrowRight, Sparkles, Filter, ArrowDownToLine, Copy, FolderPlus, MousePointer2, Clock, Trash2, X } from 'lucide-react';

const WhyChoose = () => {
  const bentoFeatures = [
    {
      span: 'md:col-span-1',
      tag: 'THE PROBLEM',
      tagColor: 'text-red-600 bg-red-100',
      title: 'Drowning in 50+ Tabs?',
      description: 'Your browser is slow. You can\'t find that one article. You want to restart, but you\'re afraid to lose your research.',
      bgColor: 'bg-white',
      borderColor: 'border-red-100',
      illustration: 'clutter'
    },
    {
      span: 'md:col-span-1',
      tag: 'THE SOLUTION',
      tagColor: 'text-emerald-600 bg-emerald-100',
      title: 'One Click to Save them All',
      description: 'The "Session Saver" extension grabs every open URL instantly. No copy-pasting. Just click and chill.',
      bgColor: 'bg-emerald-50/50',
      borderColor: 'border-emerald-200',
      illustration: 'click'
    },
    {
      span: 'md:col-span-1',
      tag: 'THE RESULT',
      tagColor: 'text-blue-600 bg-blue-100',
      title: 'Zero Clutter, Zero Stress',
      description: 'Your tabs turn into a neat, dated folder. Close your browser with total peace of mind.',
      bgColor: 'bg-blue-50/50',
      borderColor: 'border-blue-200',
      illustration: 'calm'
    },
    {
      span: 'md:col-span-1',
      tag: 'THE POWER',
      tagColor: 'text-purple-600 bg-purple-100',
      title: 'Time Travel for Browsers',
      description: 'Need that session from last Tuesday? Restore all tabs at once or pick just the one you need.',
      bgColor: 'bg-white',
      borderColor: 'border-purple-200',
      illustration: 'restore'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 font-noto-serif">
            From Chaos to clarity.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            LinkEase isn't just a bookmark tool. It's a <span className="font-semibold text-gray-900">memory upgrade</span> for your browser.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bentoFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.span} ${feature.bgColor} border ${feature.borderColor} rounded-[2rem] p-8 lg:p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 flex flex-col`}
            >
              {/* Content Top */}
              <div className="relative z-10 mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 ${feature.tagColor}`}>
                  {feature.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>

              {/* Illustration Area - fills the bottom/rest of the card */}
              <div className="relative flex-grow flex items-center justify-center min-h-[240px] mt-auto">

                {/* 1. CLUTTER ILLUSTRATION */}
                {feature.illustration === 'clutter' && (
                  <div className="relative w-full max-w-[320px]">
                    {/* Browser UI Container */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg border-b-4 border-b-gray-200 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      {/* Fake Address Bar */}
                      <div className="bg-gray-100 p-2 flex items-center gap-2 border-b border-gray-100">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        </div>
                        <div className="flex-1 h-5 bg-white rounded border border-gray-200"></div>
                      </div>

                      {/* CRAMMED TABS */}
                      <div className="flex overflow-hidden border-b border-gray-200 h-8">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="flex-1 border-r border-gray-200 bg-gray-50 flex items-center justify-center min-w-[20px]">
                            <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-blue-200' : 'bg-pink-200'}`}></div>
                          </div>
                        ))}
                      </div>

                      {/* Highlighted "Too Many" Warning */}
                      <div className="p-6 bg-red-50/50 flex flex-col items-center justify-center text-center pb-8">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 animate-pulse">
                          <span className="text-lg font-bold text-red-600">!</span>
                        </div>
                        <div className="text-xs font-bold text-red-500 uppercase tracking-wide">High Memory Usage</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
                      Speed: -40%
                    </div>
                  </div>
                )}


                {/* 2. CLICK ILLUSTRATION */}
                {feature.illustration === 'click' && (
                  <div className="relative w-full max-w-[280px] h-[200px] flex items-center justify-center">
                    {/* The Button */}
                    <div className="relative group/btn cursor-pointer">
                      <div className="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-20 group-hover/btn:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transform group-hover/btn:scale-105 transition-all duration-300 flex items-center gap-3">
                        <Copy className="w-6 h-6" />
                        <span className="font-bold text-lg">Save Session</span>
                      </div>

                      {/* The Cursor */}
                      <div className="absolute -bottom-8 -right-8 transform -translate-y-2 -translate-x-2 transition-transform duration-700 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0">
                        <MousePointer2 className="w-10 h-10 text-gray-800 fill-white drop-shadow-lg" />
                      </div>

                      {/* Success Popups */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 delay-100">
                        <div className="bg-white border border-emerald-100 px-3 py-1 rounded-lg shadow-sm text-xs font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> 42 Tabs Saved!
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                {/* 3. CALM ILLUSTRATION */}
                {feature.illustration === 'calm' && (
                  <div className="relative w-full max-w-[300px]">
                    {/* Simplified Clean List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      <div className="p-3 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Saved Sessions</span>
                        <Filter className="w-3 h-3 text-gray-300" />
                      </div>
                      <div className="p-2 space-y-2">
                        {[
                          { name: 'Thesis Research', count: 12, color: 'bg-blue-500' },
                          { name: 'Holiday Gift Ideas', count: 8, color: 'bg-purple-500' },
                          { name: 'React Tutorials', count: 5, color: 'bg-cyan-500' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                            <div className={`w-8 h-8 rounded-lg ${item.color} bg-opacity-10 flex items-center justify-center text-xs font-bold ${item.color.replace('bg-', 'text-')}`}>
                              <FolderPlus className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold text-gray-700">{item.name}</div>
                              <div className="text-[10px] text-gray-400">{item.count} links • Just now</div>
                            </div>
                            <ArrowRight className="w-3 h-3 text-gray-300 group-hover/item:text-gray-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. RESTORE ILLUSTRATION */}
                {feature.illustration === 'restore' && (
                  <div className="relative w-full max-w-[280px] flex justify-center">
                    <div className="relative">
                      {/* Central Folder */}
                      <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center border-2 border-purple-200 z-10 relative shadow-sm">
                        <FolderPlus className="w-10 h-10 text-purple-500" />
                      </div>

                      {/* Flying Tabs out of folder */}
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                        {/* Tab 1 */}
                        <div className="absolute bg-white p-2 rounded-lg shadow-md border border-gray-100 w-16 transform transition-all duration-700 group-hover:-translate-y-16 group-hover:-translate-x-12 group-hover:rotate-[-6deg] opacity-0 group-hover:opacity-100">
                          <div className="h-1 w-full bg-purple-200 rounded mb-1"></div>
                          <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
                        </div>
                        {/* Tab 2 */}
                        <div className="absolute bg-white p-2 rounded-lg shadow-md border border-gray-100 w-16 transform transition-all duration-700 delay-75 group-hover:-translate-y-20 group-hover:translate-x-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 z-20">
                          <div className="h-1 w-full bg-blue-200 rounded mb-1"></div>
                          <div className="h-1 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                        {/* Tab 3 */}
                        <div className="absolute bg-white p-2 rounded-lg shadow-md border border-gray-100 w-16 transform transition-all duration-700 delay-150 group-hover:-translate-y-16 group-hover:translate-x-12 group-hover:rotate-[6deg] opacity-0 group-hover:opacity-100">
                          <div className="h-1 w-full bg-green-200 rounded mb-1"></div>
                          <div className="h-1 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                      </div>

                      {/* Action Label */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                          Restoring Session...
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
