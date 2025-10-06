import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Add a new link
export const addLink = async (userId, linkData) => {
  try {
    const docRef = await addDoc(collection(db, 'users', userId, 'links'), {
      ...linkData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...linkData };
  } catch (error) {
    console.error('Error adding link:', error);
    throw error;
  }
};

// Get all links for a user
export const getUserLinks = async (userId) => {
  try {
    const q = query(
      collection(db, 'users', userId, 'links'),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const links = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return links;
  } catch (error) {
    console.error('Error getting links:', error);
    console.error('Error details:', error.message);
    throw error;
  }
};

// Update a link
export const updateLink = async (userId, linkId, linkData) => {
  try {
    const linkRef = doc(db, 'users', userId, 'links', linkId);
    await updateDoc(linkRef, {
      ...linkData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating link:', error);
    throw error;
  }
};

// Delete a link
export const deleteLink = async (userId, linkId) => {
  try {
    await deleteDoc(doc(db, 'users', userId, 'links', linkId));
  } catch (error) {
    console.error('Error deleting link:', error);
    throw error;
  }
};

// Search links
export const searchLinks = (links, searchTerm) => {
  if (!searchTerm) return links;
  
  const term = searchTerm.toLowerCase();
  return links.filter(link => 
    link.title?.toLowerCase().includes(term) ||
    link.url?.toLowerCase().includes(term) ||
    link.description?.toLowerCase().includes(term) ||
    link.tags?.some(tag => tag.toLowerCase().includes(term))
  );
};

// Filter links by category
export const filterByCategory = (links, category) => {
  if (!category || category === 'all') return links;
  return links.filter(link => link.category === category);
};

// Filter links by tag
export const filterByTag = (links, tag) => {
  if (!tag) return links;
  return links.filter(link => link.tags?.includes(tag));
};
