// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByn9gPMLRHXY3oeXhM0gM5wLshBXHPROg",
  authDomain: "book-catalog-40735-93867.firebaseapp.com",
  projectId: "book-catalog-40735",
  storageBucket: "book-catalog-40735.appspot.com",
  messagingSenderId: "429248528929",
  appId: "1:429248528929:web:da301f583f9c624db35960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);