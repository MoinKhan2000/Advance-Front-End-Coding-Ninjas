// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdRUjKdfTwokpYvM_nHhZfhj6y9tJmNN0",
  authDomain: "photofolio-e0d1f.firebaseapp.com",
  projectId: "photofolio-e0d1f",
  storageBucket: "photofolio-e0d1f.appspot.com",
  messagingSenderId: "549205441057",
  appId: "1:549205441057:web:c608e2a5b7ef1f3df04160",
  measurementId: "G-21X50VE4HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud FireStore and get a reference to the service.
const db = getFirestore(app)
export default db
