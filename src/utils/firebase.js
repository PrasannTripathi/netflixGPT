// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFETuoVKwo3UrPlIFLLgNzj7EgePLpEtA",
  authDomain: "netflix-gpt-93fa0.firebaseapp.com",
  projectId: "netflix-gpt-93fa0",
  storageBucket: "netflix-gpt-93fa0.firebasestorage.app",
  messagingSenderId: "824133639568",
  appId: "1:824133639568:web:0cb81d4c7dc69ca8a12715",
  measurementId: "G-G6R9J47RTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();