// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDHc2ABK4KTGP1KsUS7q-brYuHKUuHBnM4",
  // authDomain: "a-sports-equipment-store.firebaseapp.com",
  // projectId: "a-sports-equipment-store",
  // storageBucket: "a-sports-equipment-store.firebasestorage.app",
  // messagingSenderId: "269406438484",
  // appId: "1:269406438484:web:f39c586fa500f0bcc699c1"
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_AP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);