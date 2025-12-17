import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserLinks, addLink, updateLink, deleteLink, searchLinks, filterByCategory } from '../services/linkService';
import toast from 'react-hot-toast';
import Header from '../components/dashboard/Header';
import AddLinkModal from '../components/dashboard/AddLinkModal';
import ImportModal from '../components/dashboard/ImportModal';
import { Plus, Loader, Folder, ExternalLink, Edit2, Trash2, Globe, ArrowDownToLine } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { cn } from "../lib/utils";

const Dashboard = () => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);

  const dummyLinks = [
    { id: 'd1', title: 'Shadcn UI', url: 'https://ui.shadcn.com', category: 'Design', tags: ['ui', 'components'], isDummy: true },
    { id: 'd2', title: 'React Documentation', url: 'https://react.dev', category: 'Development', tags: ['react', 'frontend'], isDummy: true },
    { id: 'd3', title: 'Tailwind CSS', url: 'https://tailwindcss.com', category: 'Design', tags: ['css'], isDummy: true },
    { id: 'd4', title: 'Next.js', url: 'https://nextjs.org', category: 'Development', tags: ['framework'], isDummy: true },
    { id: 'd5', title: 'GitHub', url: 'https://github.com', category: 'Tools', tags: ['git'], isDummy: true },
  ];

  // Load links
  useEffect(() => {
    loadLinks();
  }, [user]);

  // Filter links when search or category changes
  useEffect(() => {
    let sourceLinks = links;

    // If no links and not loading, show dummy links
    if (links.length === 0 && !loading) {
      sourceLinks = dummyLinks;
    }

    let result = sourceLinks;

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(link =>
        link.title.toLowerCase().includes(lowerTerm) ||
        link.url.toLowerCase().includes(lowerTerm) ||
        (link.tags && link.tags.some(tag => tag.toLowerCase().includes(lowerTerm)))
      );
    }

    // Filter
    if (selectedCategory !== 'all') {
      result = result.filter(link => link.category === selectedCategory);
    }

    setFilteredLinks(result);
  }, [links, searchTerm, selectedCategory, loading]);

  const loadLinks = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const userLinks = await getUserLinks(user.uid);
      setLinks(userLinks);
    } catch (error) {
      console.error('Error loading links:', error);
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

  const handleDeleteLink = async (link) => {
    if (link.isDummy) {
      toast.error("Cannot delete showcase links");
      return;
    }
    if (!window.confirm('Are you sure you want to delete this link?')) return;

    try {
      await deleteLink(user.uid, link.id);
      setLinks(links.filter(l => l.id !== link.id));
      toast.success('Link deleted successfully!');
    } catch (error) {
      console.error('Error deleting link:', error);
      toast.error('Failed to delete link');
    }
  };

  const handleEditLink = (link) => {
    if (link.isDummy) {
      toast.error("Cannot edit showcase links");
      return;
    }
    setEditingLink(link);
    setIsModalOpen(true);
  };

  const handleImportLinks = async (importedTabs) => {
    try {
      const timestamp = new Date().toLocaleString();
      const sessionCategory = `Session ${new Date().toLocaleDateString()}`;

      const newLinks = await Promise.all(importedTabs.map(async (tab) => {
        const linkData = {
          title: tab.title || 'Untitled',
          url: tab.url,
          category: sessionCategory,
          tags: ['imported', 'session'],
          description: `Imported from session on ${timestamp}`
        };
        // Add one by one (or could batch if service supported it)
        return await addLink(user.uid, linkData);
      }));

      setLinks([...newLinks, ...links]);
      setSelectedCategory(sessionCategory);
      setIsImportModalOpen(false);
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Failed to save imported links');
    }
  };

  // Extract categories from REAL links + Dummy links if shown
  const activeLinks = links.length > 0 ? links : (!loading ? dummyLinks : []);
  const categories = ['all', ...new Set(activeLinks.map(link => link.category).filter(Boolean))];
  const allTags = [...new Set(activeLinks.flatMap(link => link.tags || []))];

  const getCategoryStats = () => {
    const stats = {};
    activeLinks.forEach(link => {
      const category = link.category || 'Uncategorized';
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };
  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-muted/40 pb-20">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin text-primary" size={40} />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Dashboard</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Manage your links, resources, and inspirations.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setIsImportModalOpen(true)} className="gap-2">
                  <ArrowDownToLine className="h-4 w-4" /> Import Session
                </Button>
                <Button size="lg" onClick={() => { setEditingLink(null); setIsModalOpen(true); }} className="gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Plus className="h-5 w-5" /> Add New Link
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {category !== 'all' && (
                      <Badge variant="secondary" className="ml-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground border-0">
                        {categoryStats[category]}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLinks.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Folder className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">No links found</h3>
                  <p className="text-muted-foreground mt-1 max-w-sm">
                    Try adjusting your search or category filters, or add a new link to get started.
                  </p>
                  <Button variant="link" onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }} className="mt-4">
                    Clear filters
                  </Button>
                </div>
              ) : (
                filteredLinks.map((link) => (
                  <Card key={link.id} className="group hover:shadow-md transition-all duration-300 border-transparent hover:border-border/50 bg-card/50 hover:bg-card">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <Globe className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="font-normal text-xs uppercase tracking-wider text-muted-foreground">
                          {link.category}
                        </Badge>
                      </div>
                      <CardTitle className="leading-tight line-clamp-1 mt-4 text-lg">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-1 text-xs font-mono">
                        {new URL(link.url).hostname}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3 min-h-[80px]">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {link.description || "No description provided."}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {link.tags?.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                        {link.tags?.length > 3 && (
                          <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded-md">
                            +{link.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-end gap-2 border-t bg-muted/20">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => handleEditLink(link)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => handleDeleteLink(link)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="ml-auto gap-1 text-xs h-8" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </div>
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

      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportLinks}
      />
    </div>
  );
};

export default Dashboard;
