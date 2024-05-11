import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyCoFGTuE8S2Vsc47BNSv2zRI7yEzSDfU1I",
//     authDomain: "hackonavate.firebaseapp.com",
//     projectId: "hackonavate",
//     storageBucket: "hackonavate.appspot.com",
//     messagingSenderId: "190054215343",
//     appId: "1:190054215343:web:8d32c9d5ce686b390f6e5a",
//     measurementId: "G-3H7CME6Y6Y"
//   };


const firebaseConfig = {
  apiKey: "AIzaSyCMXLHPcNhWK0pdbLBjmpb1hWZ0DaLjNrk",
  authDomain: "hackathon-80253.firebaseapp.com",
  projectId: "hackathon-80253",
  storageBucket: "hackathon-80253.appspot.com",
  messagingSenderId: "602505508068",
  appId: "1:602505508068:web:e77de6492a56c4f74068f1",
  measurementId: "G-833YK6GVXB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app; 