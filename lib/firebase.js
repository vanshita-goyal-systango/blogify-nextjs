import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBY3tTvZ0VQRZswG8irSCUvypvW2OL3k3Q",
  authDomain: "blogify-83085.firebaseapp.com",
  projectId: "blogify-83085",
  storageBucket: "blogify-83085.firebasestorage.app",
  messagingSenderId: "1058111846209",
  appId: "1:1058111846209:web:e634a518c1d3653b1253c0",
  measurementId: "G-0K7T6D8FEY"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth = getAuth();