import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isDemoMode = !auth;

  // Sign up with email and password
  const signup = async (email, password, displayName) => {
    if (isDemoMode) {
      const demoUser = { uid: 'demo-user', email, displayName, emailVerified: true };
      setUser(demoUser);
      return { user: demoUser };
    }
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    return result;
  };

  // Login with email and password
  const login = async (email, password) => {
    if (isDemoMode) {
      // Allow any login in demo mode
      const demoUser = { uid: 'demo-user', email, displayName: 'Demo User', emailVerified: true };
      setUser(demoUser);
      return { user: demoUser };
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = async () => {
    if (isDemoMode) {
      setUser(null);
      return;
    }
    return signOut(auth);
  };

  // Reset password
  const resetPassword = (email) => {
    if (isDemoMode) {
      return Promise.resolve();
    }
    return sendPasswordResetEmail(auth, email);
  };

  // Google sign in
  const signInWithGoogle = async () => {
    if (isDemoMode) {
      const demoUser = { uid: 'demo-user', email: 'demo@example.com', displayName: 'Demo Google User', emailVerified: true };
      setUser(demoUser);
      return { user: demoUser };
    }
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Listen to auth state changes
  useEffect(() => {
    if (isDemoMode) {
      // In demo mode, we can auto-login a user for convenience or start logged out
      // For now, let's start with a logged-in demo user to show the dashboard immediately
      setUser({ uid: 'demo-user', email: 'demo@example.com', displayName: 'Demo User' });
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [isDemoMode]);

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    signInWithGoogle,
    isDemoMode
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
