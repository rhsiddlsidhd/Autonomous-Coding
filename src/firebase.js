// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB10cmONG_ayLNEIr7QUn6UIPmRXShVLt8",
  authDomain: "shoeswebtest.firebaseapp.com",
  projectId: "shoeswebtest",
  storageBucket: "shoeswebtest.appspot.com",
  messagingSenderId: "736298464790",
  appId: "1:736298464790:web:d1c9a27b5fe48a5967a737",
  measurementId: "G-D5QJNBVR16",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
