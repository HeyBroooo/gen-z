import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyABIMBD-WPh0P8I4glfgq6EsddCkmgb9Ek",
    authDomain: "hoodiehub.firebaseapp.com",
    databaseURL: "https://hoodiehub-default-rtdb.firebaseio.com",
    projectId: "hoodiehub",
    storageBucket: "hoodiehub.appspot.com",
    messagingSenderId: "557600069902",
    appId: "1:557600069902:web:59918565ba0a1fc4b95f5f",
    measurementId: "G-W72SMZHYQJ"
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
