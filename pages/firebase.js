// ./firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABIMBD-WPh0P8I4glfgq6EsddCkmgb9Ek",
  authDomain: "hoodiehub.firebaseapp.com",
  projectId: "hoodiehub",
  storageBucket: "hoodiehub.appspot.com",
  messagingSenderId: "557600069902",
  appId: "1:557600069902:web:59918565ba0a1fc4b95f5f",
  measurementId: "G-W72SMZHYQJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider };




