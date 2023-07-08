import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLnDua5jsPtAkypzko-YXtyEVy1763ktA",
  authDomain: "linkdn-clone-d54d3.firebaseapp.com",
  projectId: "linkdn-clone-d54d3",
  storageBucket: "linkdn-clone-d54d3.appspot.com",
  messagingSenderId: "161667547055",
  appId: "1:161667547055:web:eb77c5a8f225d97c03795a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)