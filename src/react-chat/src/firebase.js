// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoj8JY0XzaC7AzcMjN2AlK_lIOL8ZC4ZQ",
  authDomain: "reactchatapp-dd559.firebaseapp.com",
  projectId: "reactchatapp-dd559",
  storageBucket: "reactchatapp-dd559.appspot.com",
  messagingSenderId: "612049590676",
  appId: "1:612049590676:web:a60f14f577a735cb781781",
  measurementId: "G-1TY9FH7WG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);