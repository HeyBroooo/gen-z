import {app} from "./firebase";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";



const db = getFirestore(app);


/**
 * 
 * @param {String} CollectionName 
 * @param {Object} body 
 * @returns 
 */


export async function SendToFirebase(CollectionName, body) {
    try {
      const response = await addDoc(collection(db, CollectionName), body);
      return response;
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
      throw error;
    }
  }
  



/**
 * 
 * @param {string} CollectionName 
 * @returns 
 * 
 * 
 */

export const GetAllData = async (CollectionName) => {
    if (!CollectionName) return [];
  
    const querySnapshot = await getDocs(collection(db, CollectionName));
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
  
    return dataArray;
  };
  