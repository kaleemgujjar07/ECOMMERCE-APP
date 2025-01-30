// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbqhpudHLkCBDqLT12nShNAUw4IIJt-3g",
  authDomain: "ecommerce-app-c2d23.firebaseapp.com",
  projectId: "ecommerce-app-c2d23",
  storageBucket: "ecommerce-app-c2d23.firebasestorage.app",
  messagingSenderId: "748704344932",
  appId: "1:748704344932:web:9b9c679f4b3138374ea871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}