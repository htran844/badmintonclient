import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebaseconfig";
import { AddUserToFireStore } from "./user";

const auth = getAuth(app);

const Register = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            await AddUserToFireStore(user.uid, user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
            // ..
        });
}


export{
    Register
}