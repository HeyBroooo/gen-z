import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Login from "./login";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  // Replace this with your actual authentication logic
  const [authenticated, setAuthenticated] = useState(false);

  // Simulate a delay for checking authentication status (e.g., API call)
  useEffect(() => {
    // Replace this with your actual authentication check logic
    setTimeout(() => {
      // Set authenticated to true if the user is logged in
      setAuthenticated(true);
    }, 1000); // Simulate a 1-second delay for the example
  }, []);

  useEffect(() => {
    // Redirect to the login page if not authenticated
    if (!authenticated && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [authenticated, router]);

  // If authenticated, render the children (the actual app content)
  return authenticated ? <>{children}</> : <Login />;
};

export default AuthLayout;
