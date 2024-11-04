// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYR-kN7XpqNjECJRcM4zufX9WmIfaPAo",
  authDomain: "busybuy-cd8b4.firebaseapp.com",
  projectId: "busybuy-cd8b4",
  storageBucket: "busybuy-cd8b4.firebasestorage.app",
  messagingSenderId: "816623691085",
  appId: "1:816623691085:web:9ca4fd0319a1f9cbe60304"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);