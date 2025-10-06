import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserLinks, addLink, updateLink, deleteLink, searchLinks, filterByCategory } from '../services/linkService';
import toast from 'react-hot-toast';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import LinkCard from '../components/dashboard/LinkCard';
import AddLinkModal from '../components/dashboard/AddLinkModal';
import EmptyState from '../components/dashboard/EmptyState';
import { Plus, Loader } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      await updateLink(linkId, linkData);
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
      await deleteLink(linkId);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          tags={allTags}
          linkCount={links.length}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 md:p-8 md:ml-64">
          {/* Add Link Button */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Links' : selectedCategory}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {filteredLinks.length} {filteredLinks.length === 1 ? 'link' : 'links'}
              </p>
            </div>
            <button
              onClick={() => {
                setEditingLink(null);
                setIsModalOpen(true);
              }}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">Add Link</span>
            </button>
          </div>

          {/* Links Grid */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader className="animate-spin text-gray-400" size={40} />
            </div>
          ) : filteredLinks.length === 0 ? (
            <EmptyState 
              onAddLink={() => setIsModalOpen(true)}
              hasLinks={links.length > 0}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLinks.map(link => (
                <LinkCard
                  key={link.id}
                  link={link}
                  onEdit={handleEditLink}
                  onDelete={handleDeleteLink}
                />
              ))}
            </div>
          )}
        </main>
      </div>

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
