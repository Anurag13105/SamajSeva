import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCoFGTuE8S2Vsc47BNSv2zRI7yEzSDfU1I",
    authDomain: "hackonavate.firebaseapp.com",
    projectId: "hackonavate",
    storageBucket: "hackonavate.appspot.com",
    messagingSenderId: "190054215343",
    appId: "1:190054215343:web:8d32c9d5ce686b390f6e5a",
    measurementId: "G-3H7CME6Y6Y"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app; 