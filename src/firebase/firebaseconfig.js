import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvNth3UeVSfNmXzCTlE1-MnGkQ8g2Ztxo",
  authDomain: "caulongshop-4e83c.firebaseapp.com",
  projectId: "caulongshop-4e83c",
  storageBucket: "caulongshop-4e83c.appspot.com",
  messagingSenderId: "384753887481",
  appId: "1:384753887481:web:4d45af76c587d84fceda28",
  measurementId: "G-F5RGS6Q1JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    db
}