import { Folder, Tag, X, Link as LinkIcon } from 'lucide-react';

const Sidebar = ({ categories, selectedCategory, onCategoryChange, tags, linkCount, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 z-50
        md:translate-x-0 md:top-[73px] md:z-10
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600">
              <LinkIcon size={20} />
              <span className="text-sm">Total Links</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{linkCount}</p>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 flex items-center gap-2">
              <Folder size={16} />
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    onClose();
                  }}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg transition-colors text-sm
                    ${selectedCategory === category 
                      ? 'bg-gray-900 text-white font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {category === 'all' ? 'All Links' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 flex items-center gap-2">
                <Tag size={16} />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 10).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
