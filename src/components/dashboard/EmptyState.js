import { LinkIcon, Search, Filter } from 'lucide-react';

const EmptyState = ({ onAddLink, hasLinks }) => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md">
        {hasLinks ? (
          // No results from search/filter
          <>
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No links found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </>
        ) : (
          // No links at all
          <>
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No links yet</h3>
            <p className="text-gray-600 mb-6">
              Start building your collection by adding your first link.
            </p>
            <button
              onClick={onAddLink}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Add Your First Link
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
