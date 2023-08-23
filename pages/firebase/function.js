import {app} from "./firebase";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";



const db = getFirestore(app);


/**
 * 
 * @param {String} collection 
 * @param {Object} body 
 * @returns 
 */


export async function SendToFirebase(collection, body) {
    const response = await addDoc(collection(db, collection), body);

    return response;
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
  