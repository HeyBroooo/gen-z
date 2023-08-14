import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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


 const firestore = getFirestore(app);
 const storage = getStorage(app);

 export { firestore, storage };
