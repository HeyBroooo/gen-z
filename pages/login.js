import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const Login = () => {


  const firebaseConfig = {
    apiKey: "AIzaSyABIMBD-WPh0P8I4glfgq6EsddCkmgb9Ek",
    authDomain: "hoodiehub.firebaseapp.com",
    projectId: "hoodiehub",
    storageBucket: "hoodiehub.appspot.com",
    messagingSenderId: "557600069902",
    appId: "1:557600069902:web:59918565ba0a1fc4b95f5f",
    measurementId: "G-W72SMZHYQJ"
  };

  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics();
  return (
    <div>
      
    </div>
  )
}

export default Login;
