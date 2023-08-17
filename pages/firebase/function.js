import {app} from "./firebase";
import { getFirestore, collection, doc, addDoc, getDocs} from "firebase/firestore";



const db = getFirestore(app);


/**
 * 
 * @param {String} CollectionName 
 * @param {Object} body 
 * @returns 
 */


export async function SendToFirebaseWithImage(CollectionName, body, imageFile) {
    // Upload image to Firebase Storage and get the image URL/reference
    const storageRef = ref(storage, "images/" + imageFile.name);
    await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(storageRef);

    // Combine image URL/reference with other data
    const dataWithImage = { ...body, imageUrl };

    // Add the combined data to Firestore
    const response = await addDoc(collection(db, CollectionName), dataWithImage);

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