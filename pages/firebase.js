// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Gk3gSrQOSfGqbepYPjjqEyY1MT3cMDE",
  authDomain: "hoodiehub-a59f1.firebaseapp.com",
  projectId: "hoodiehub-a59f1",
  storageBucket: "hoodiehub-a59f1.appspot.com",
  messagingSenderId: "1065903415428",
  appId: "1:1065903415428:web:b023330c01a99e27fca2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
