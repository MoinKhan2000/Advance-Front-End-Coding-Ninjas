// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ZahB7rxcINSrs3f8qI_I1ZAsxpziB58",
  authDomain: "blogging-app-1b21e.firebaseapp.com",
  projectId: "blogging-app-1b21e",
  storageBucket: "blogging-app-1b21e.appspot.com",
  messagingSenderId: "415625071419",
  appId: "1:415625071419:web:3f691eb1770386dce7c51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud FireStore and get a reference to the service.
export const db = getFirestore(app)
