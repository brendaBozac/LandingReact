// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqp3J1v9CWLahhKk2Vz0b54Fyo-edJXW4",
  authDomain: "ecommerce-one-react.firebaseapp.com",
  projectId: "ecommerce-one-react",
  storageBucket: "ecommerce-one-react.appspot.com",
  messagingSenderId: "442885569318",
  appId: "1:442885569318:web:1096f71290a82e86a11fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
