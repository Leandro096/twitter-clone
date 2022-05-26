// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHKpq3pRd57BOn5mQAabWLgBJKOYfGums",
    authDomain: "twitter-clone-1da32.firebaseapp.com",
    projectId: "twitter-clone-1da32",
    storageBucket: "twitter-clone-1da32.appspot.com",
    messagingSenderId: "659611834332",
    appId: "1:659611834332:web:7a867720ecf8b72c19a119",
    measurementId: "G-669GFRFFBR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };