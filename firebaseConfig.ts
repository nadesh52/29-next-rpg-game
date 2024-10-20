// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG-kkuPh-HVLMtknqFa02tV0s88lMue2k",
  authDomain: "next-rpg-3480c.firebaseapp.com",
  projectId: "next-rpg-3480c",
  storageBucket: "next-rpg-3480c.appspot.com",
  messagingSenderId: "1008353421383",
  appId: "1:1008353421383:web:42260759e7a2e601b5e962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
