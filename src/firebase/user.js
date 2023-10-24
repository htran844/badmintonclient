
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseconfig";

const AddUserToFireStore = async (uid, email) => {
    const docData = {
        uid,
        email,
        status: true
    };
    try {
        const docRef = await addDoc(collection(db, "users"), docData);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
export {
    AddUserToFireStore
}