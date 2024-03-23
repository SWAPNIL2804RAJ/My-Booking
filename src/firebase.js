// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDKT6b2XJIjVX2krlV7bKuvD2i-uVNsXE",
  authDomain: "mybookings-reactapp.firebaseapp.com",
  projectId: "mybookings-reactapp",
  storageBucket: "mybookings-reactapp.appspot.com",
  messagingSenderId: "291389956587",
  appId: "1:291389956587:web:e161231487b849f4ba79ae",
  measurementId: "G-327MP6XEE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{ app, auth};

