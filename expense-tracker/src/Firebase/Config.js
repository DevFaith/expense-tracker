// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4Ro_sWA-GbrpE_beKKTBmbDM8San50M",
  authDomain: "expense-trackerb.firebaseapp.com",
  projectId: "expense-trackerb",
  storageBucket: "expense-trackerb.firebasestorage.app",
  messagingSenderId: "535002353469",
  appId: "1:535002353469:web:711cd367043ee568e1bf54",
  measurementId: "G-0Y778PQVHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);