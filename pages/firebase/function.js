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
    const response = await addDoc(collection(db, CollectionName), body);

    return response;
}



/**
 * 
 * @param {string} CollectionName 
 * @returns 
 * 
 * 
 */

export const GetAllData  =  async (CollectionName) => {
     if (!CollectionName) return;
    const res = await getDocs(collection(db, CollectionName));
    return res;
}