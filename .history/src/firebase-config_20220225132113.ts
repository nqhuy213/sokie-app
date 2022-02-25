// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKNswpeZeAi9FpPc07p_ipx34KLrTpaT0",
  authDomain: "sokie-app.firebaseapp.com",
  projectId: "sokie-app",
  storageBucket: "sokie-app.appspot.com",
  messagingSenderId: "552156576816",
  appId: "1:552156576816:web:8082f34cabcd76754281f5",
  measurementId: "G-WVZ9ND9GPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);