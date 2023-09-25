"use client"
import {app} from "./firebase";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";



const db = getFirestore(app);


/**
 * 
 * @param {String} productType 
 * @param {Object} body 
 * @returns 
 */


export async function SendToFirebase(productType, body) {
    try {
        const collectionRef = collection(db, `${productType}-collection`);
        const response = await addDoc(collectionRef, body);

        return response;
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
      throw error;
    }
  }
  



/**
 * 
 * @param {string} productType
 * @returns 
 * 
 * 
 */

export const GetAllData = async (productType) => {
    if (!productType) return [];
  
    const querySnapshot = await getDocs(collection(db, `${productType}-collection`));
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
  
    return dataArray;
  };
  
  
  