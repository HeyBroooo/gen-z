import {app} from "./firebase";
import { getFirestore, collection, doc, addDoc} from "firebase/firestore";



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
