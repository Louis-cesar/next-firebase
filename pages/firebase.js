// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu3F1GpSzLcEkRwdeWPROR8F3VpJU94MY",
  authDomain: "next-firebase-50f07.firebaseapp.com",
  projectId: "next-firebase-50f07",
  storageBucket: "next-firebase-50f07.appspot.com",
  messagingSenderId: "288144902800",
  appId: "1:288144902800:web:1e297f9fb9565f42712615",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
