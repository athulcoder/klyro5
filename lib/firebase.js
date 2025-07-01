// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "klyro5.firebaseapp.com",
  projectId: "klyro5",
  storageBucket: "klyro5.firebasestorage.app",
  messagingSenderId: "327157381149",
  appId: "1:327157381149:web:c5f75d061715dc4219eef4",
  measurementId: "G-HQ139XMHJ7",
};

// Initialize Firebase
const auth = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default auth;
