// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig as importedConfig } from './firebaseConfig.js';

// Your web app's Firebase configuration
// Try to get from environment variables first (for Netlify production)
// Fall back to imported config (for local development)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || importedConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || importedConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || importedConfig.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || importedConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || importedConfig.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || importedConfig.appId
};

console.log('🔧 Firebase Config Debug:', {
  apiKey: firebaseConfig.apiKey ? '✅ ' + firebaseConfig.apiKey.substring(0, 10) + '...' : '❌ EMPTY',
  authDomain: firebaseConfig.authDomain || '❌ EMPTY',
  projectId: firebaseConfig.projectId || '❌ EMPTY',
  storageBucket: firebaseConfig.storageBucket || '❌ EMPTY',
  messagingSenderId: firebaseConfig.messagingSenderId || '❌ EMPTY',
  appId: firebaseConfig.appId || '❌ EMPTY'
});

// Check if Firebase config is properly set
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error('❌ Firebase configuration is not set!');
  console.error('Config received:', firebaseConfig);
}

// Initialize Firebase
let app;
let auth;
let db;
let storage;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Failed to initialize Firebase:', error);
}

export { auth, db, storage };
export default app;
