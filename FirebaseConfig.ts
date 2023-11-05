import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcBazcEG1uM9To1qXxazmGklYzdoIk0VE",
  authDomain: "reactnativeauth-d3446.firebaseapp.com",
  projectId: "reactnativeauth-d3446",
  storageBucket: "reactnativeauth-d3446.appspot.com",
  messagingSenderId: "1013131040449",
  appId: "1:1013131040449:web:8a1e623b5f245ebe9de640"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);