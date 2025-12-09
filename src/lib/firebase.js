// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirebaseConfig } from './firebaseConfigProd.js';

// Get Firebase configuration
const firebaseConfig = getFirebaseConfig();

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
