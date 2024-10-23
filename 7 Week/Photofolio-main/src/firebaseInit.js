import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDU9jIS1pyklZq9IjA3wPOX13UDJsSw3xk",
    authDomain: "photofolio-71bd7.firebaseapp.com",
    projectId: "photofolio-71bd7",
    storageBucket: "photofolio-71bd7.appspot.com",
    messagingSenderId: "762454084973",
    appId: "1:762454084973:web:7c87d32e1fa173e3ccde64"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
