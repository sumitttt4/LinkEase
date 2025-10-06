import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserLinks, addLink, updateLink, deleteLink, searchLinks, filterByCategory } from '../services/linkService';
import toast from 'react-hot-toast';
import Header from '../components/dashboard/Header';
import AddLinkModal from '../components/dashboard/AddLinkModal';
import { Plus, Loader, Folder, ExternalLink, Edit2, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);

  // Load links
  useEffect(() => {
    loadLinks();
  }, [user]);

  // Filter links when search or category changes
  useEffect(() => {
    let result = links;
    result = searchLinks(result, searchTerm);
    result = filterByCategory(result, selectedCategory);
    setFilteredLinks(result);
  }, [links, searchTerm, selectedCategory]);

  const loadLinks = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      console.log('Loading links for user:', user.uid);
      const userLinks = await getUserLinks(user.uid);
      console.log('Loaded links:', userLinks);
      setLinks(userLinks);
      if (userLinks.length === 0) {
        console.log('No links found for user');
      }
    } catch (error) {
      console.error('Error loading links:', error);
      console.error('Error details:', error.message);
      toast.error(`Failed to load links: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddLink = async (linkData) => {
    try {
      const newLink = await addLink(user.uid, linkData);
      setLinks([newLink, ...links]);
      setIsModalOpen(false);
      toast.success('Link added successfully!');
    } catch (error) {
      console.error('Error adding link:', error);
      toast.error('Failed to add link');
    }
  };

  const handleUpdateLink = async (linkId, linkData) => {
    try {
      await updateLink(user.uid, linkId, linkData);
      setLinks(links.map(link => link.id === linkId ? { ...link, ...linkData } : link));
      setIsModalOpen(false);
      setEditingLink(null);
      toast.success('Link updated successfully!');
    } catch (error) {
      console.error('Error updating link:', error);
      toast.error('Failed to update link');
    }
  };

  const handleDeleteLink = async (linkId) => {
    if (!window.confirm('Are you sure you want to delete this link?')) return;
    
    try {
      await deleteLink(user.uid, linkId);
      setLinks(links.filter(link => link.id !== linkId));
      toast.success('Link deleted successfully!');
    } catch (error) {
      console.error('Error deleting link:', error);
      toast.error('Failed to delete link');
    }
  };

  const handleEditLink = (link) => {
    setEditingLink(link);
    setIsModalOpen(true);
  };

  const categories = ['all', ...new Set(links.map(link => link.category).filter(Boolean))];
  const allTags = [...new Set(links.flatMap(link => link.tags || []))];

  // Get category stats
  const getCategoryStats = () => {
    const stats = {};
    links.forEach(link => {
      const category = link.category || 'Uncategorized';
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  // Category colors mapping - vibrant warm colors
  const categoryColors = {
    'Work Projects': { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-500' },
    'Design Resources': { bg: 'bg-pink-50', text: 'text-pink-600', icon: 'text-pink-500' },
    'Learning': { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-500' },
    'Personal': { bg: 'bg-rose-50', text: 'text-rose-600', icon: 'text-rose-500' },
    'Development': { bg: 'bg-teal-50', text: 'text-teal-600', icon: 'text-teal-500' },
    'Design': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', icon: 'text-fuchsia-500' },
    'Dev': { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-500' },
    'CSS': { bg: 'bg-cyan-50', text: 'text-cyan-600', icon: 'text-cyan-500' },
    'Work': { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'text-amber-500' },
    'Uncategorized': { bg: 'bg-gray-50', text: 'text-gray-600', icon: 'text-gray-500' },
  };

  const getColorForCategory = (category) => {
    return categoryColors[category] || { 
      bg: 'bg-gray-50', 
      text: 'text-gray-600', 
      icon: 'text-gray-500' 
    };
  };

  // Get recent links (max 10)
  const recentLinks = [...filteredLinks].slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50/30 to-green-50/20">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin text-orange-500" size={40} />
          </div>
        ) : links.length === 0 ? (
          // Empty State
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 rounded-full mb-4 sm:mb-6">
              <Folder className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No links yet</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
              Start organizing your links by creating your first one. Add categories and tags to keep everything organized.
            </p>
            <button
              onClick={() => {
                setEditingLink(null);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300"
            >
              <Plus size={20} />
              Add Your First Link
            </button>
          </div>
        ) : (
          <>
            {/* Category Cards */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Categories</h2>
                <button
                  onClick={() => {
                    setEditingLink(null);
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                >
                  <Plus size={18} />
                  Add Link
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {Object.entries(categoryStats).map(([category, count]) => {
                  const colors = getColorForCategory(category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`${colors.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left transition-all hover:scale-105 hover:shadow-lg border-2 ${
                        selectedCategory === category ? 'border-orange-400 shadow-lg' : 'border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`${colors.icon} flex-shrink-0`}>
                          <Folder size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base sm:text-lg font-bold ${colors.text} mb-0.5 sm:mb-1 truncate`}>
                            {category}
                          </h3>
                          <p className={`text-xs sm:text-sm ${colors.text} opacity-70`}>
                            {count} {count === 1 ? 'link' : 'links'}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recent Links */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Recent Links</h2>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    View all
                  </button>
                )}
              </div>

              {recentLinks.length === 0 ? (
                <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-500">
                  No links in this category
                </div>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  {recentLinks.map((link) => {
                    const colors = getColorForCategory(link.category);
                    return (
                      <div
                        key={link.id}
                        className="group flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all bg-white"
                      >
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${colors.bg} rounded-lg sm:rounded-xl flex items-center justify-center ${colors.icon}`}>
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-current"></div>
                        </div>

                        {/* Link Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5 sm:mb-1 truncate">
                                {link.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-500 truncate">
                                {link.url}
                              </p>
                            </div>
                            {/* Category Badge */}
                            <span className={`flex-shrink-0 inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} self-start sm:self-auto`}>
                              {link.category}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </a>
                          <button
                            onClick={() => handleEditLink(link)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </button>
                          <button
                            onClick={() => handleDeleteLink(link.id)}
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Add/Edit Link Modal */}
      <AddLinkModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingLink(null);
        }}
        onSave={editingLink ? (data) => handleUpdateLink(editingLink.id, data) : handleAddLink}
        editingLink={editingLink}
        existingCategories={categories.filter(c => c !== 'all')}
        existingTags={allTags}
      />
    </div>
  );
};

export default Dashboard;
