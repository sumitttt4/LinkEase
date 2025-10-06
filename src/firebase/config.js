// Firebase Configuration
// TODO: Replace with your actual Firebase config from Firebase Console

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// YOUR FIREBASE CONFIG GOES HERE
// Get this from Firebase Console -> Project Settings -> Your Apps
const firebaseConfig = {
  apiKey: "AIzaSyCWt9AYSRneFe8HnwrH_B45ZcZ9ogtpFhM",
  authDomain: "linkease-51a7b.firebaseapp.com",
  projectId: "linkease-51a7b",
  storageBucket: "linkease-51a7b.firebasestorage.app",
  messagingSenderId: "447809133193",
  appId: "1:447809133193:web:72693ddc59ef91544c8458",
  measurementId: "G-YRVQZLZDKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
