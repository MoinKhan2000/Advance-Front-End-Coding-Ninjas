// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }