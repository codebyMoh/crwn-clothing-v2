// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; 
import {
getFirestore, doc, getDoc, setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDy3i4Y5Q2_hCgqI_xL-Ydy3wvKZVaHHQ",
  authDomain: "crwn-clothing-v1-736bf.firebaseapp.com",
  projectId: "crwn-clothing-v1-736bf",
  storageBucket: "crwn-clothing-v1-736bf.appspot.com",
  messagingSenderId: "344582393434",
  appId: "1:344582393434:web:4330e6fd3dd483500b9263",
  measurementId: "G-GLH6NVM1BS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: "select_account"
    }
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, provider)
export const db = getFirestore();
export const createUeserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error){
            console.log('User creating user', error.message)
        }
    }
    return userDocRef;
}


