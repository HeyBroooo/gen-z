// import { useEffect } from "react";
// import { auth } from "./firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "next/router";

// const RedirectToLogin = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         // If the user is not logged in, redirect to the login page
//         router.push("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return children;
// };

// export default RedirectToLogin;
