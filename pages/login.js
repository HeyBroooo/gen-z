import React from "react";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router"; // Import useRouter

const Login = () => {
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter(); // Get the router object

  const login = () => {
    signInWithPopup(auth, googleAuth)
      .then((result) => {
        // Redirect to the home page after successful login
        router.push("/");
      })
      .catch((error) => {
        // Handle login errors if needed
        console.error("Error during login:", error);
      });
  };

  return (
    <div>
      <h1> Trying firebase... </h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
