// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAImPjHLM0j5cZzep2NM9WT6-2btUoTivs",
  authDomain: "boodschappen-lijst-5b5ae.firebaseapp.com",
  projectId: "boodschappen-lijst-5b5ae",
  storageBucket: "boodschappen-lijst-5b5ae.appspot.com",
  messagingSenderId: "232550913068",
  appId: "1:232550913068:web:f500b612123424ce73ed89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
