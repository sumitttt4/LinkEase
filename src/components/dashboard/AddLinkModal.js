import { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const AddLinkModal = ({ isOpen, onClose, onSave, editingLink, existingCategories, existingTags }) => {
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
    category: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingLink) {
      setFormData({
        url: editingLink.url || '',
        title: editingLink.title || '',
        description: editingLink.description || '',
        category: editingLink.category || '',
        tags: editingLink.tags || []
      });
    } else {
      setFormData({
        url: '',
        title: '',
        description: '',
        category: '',
        tags: []
      });
    }
  }, [editingLink, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.url || !formData.title) return;

    setLoading(true);
    try {
      await onSave(formData);
      setFormData({ url: '', title: '', description: '', category: '', tags: [] });
      setTagInput('');
    } catch (error) {
      console.error('Error saving link:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    const tag = tagInput.trim().toLowerCase();
    if (tag && !formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== tagToRemove) });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingLink ? 'Edit Link' : 'Add New Link'}</DialogTitle>
          <DialogDescription>
            {editingLink ? 'Update the details of your link.' : 'Add a new link to your collection.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="url" className="text-sm font-medium">URL *</label>
            <Input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">Title *</label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="My Awesome Link"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description..."
              className={cn(
                "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              )}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="Work, Personal, Learning..."
              list="categories"
            />
            <datalist id="categories">
              {existingCategories.map(cat => <option key={cat} value={cat} />)}
            </datalist>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Tags</label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                placeholder="Add tags..."
                list="existingTags"
              />
              <Button type="button" onClick={handleAddTag} variant="secondary">
                Add
              </Button>
            </div>
            <datalist id="existingTags">
              {existingTags.map(tag => <option key={tag} value={tag} />)}
            </datalist>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="rounded-full hover:bg-muted p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Link'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddLinkModal;
