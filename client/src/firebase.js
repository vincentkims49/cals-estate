// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-cal-estate.firebaseapp.com",
  projectId: "mern-cal-estate",
  storageBucket: "mern-cal-estate.appspot.com",
  messagingSenderId: "120701032855",
  appId: "1:120701032855:web:913a0831d7dca1a0560cd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);