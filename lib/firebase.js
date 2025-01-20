import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

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
const analytics = getAnalytics(app);