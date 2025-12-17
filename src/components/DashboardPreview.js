import React from 'react';
import { FolderPlus, Copy, Trash2, Plus } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-white border border-gray-200">
      {/* Browser Window Chrome */}
      <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white h-8 rounded-md shadow-sm border border-gray-200 flex items-center px-4 text-xs text-gray-500">
          linkease.app/dashboard
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row h-[400px]">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-50 border-r border-gray-200 p-4">
          <div className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div> LinkEase
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
              <FolderPlus className="w-4 h-4" /> All Sessions
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
              <Copy className="w-4 h-4" /> Favorites
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
              <Trash2 className="w-4 h-4" /> Trash
            </div>
          </div>

          <div className="mt-8 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recent Folders</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 text-gray-600 text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Project X Research
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-600 text-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div> Holiday Shopping
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-hidden relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">My Saved Sessions</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-sm flex items-center gap-2">
                <Plus className="w-4 h-4" /> Save Current Tabs
              </button>
            </div>
          </div>

          {/* Session Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Session Card 1 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <FolderPlus className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">2 mins ago</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Research: AI Tools</h3>
              <p className="text-xs text-gray-500 mb-4">12 tabs saved • Chrome</p>
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px]">G</div>
                <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px]">T</div>
                <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-[10px]">Y</div>
                <div className="w-6 h-6 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-[10px] text-gray-500">+9</div>
              </div>
            </div>

            {/* Session Card 2 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <FolderPlus className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">Yesterday</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Gift Ideas 2024</h3>
              <p className="text-xs text-gray-500 mb-4">24 tabs saved • Mobile</p>
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px]">A</div>
                <div className="w-6 h-6 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px]">E</div>
                <div className="w-6 h-6 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-[10px] text-gray-500">+21</div>
              </div>
            </div>

            {/* Session Card 3 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow group cursor-pointer border-dashed">
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                  <Copy className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-gray-600">Import from Clipboard</h3>
                <p className="text-xs text-gray-400 mt-1">Paste JSON data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
