// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtFF7vnKnvPzraCwhNDjtQlJ2VqTleu60",
  authDomain: "react-notes-1ee53.firebaseapp.com",
  projectId: "react-notes-1ee53",
  storageBucket: "react-notes-1ee53.appspot.com",
  messagingSenderId: "121573316989",
  appId: "1:121573316989:web:09293b9fa132f1aeb71414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")