// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVFKp5NoLMrT9xkWu46TVkSE2SMGJN7I",
  authDomain: "movie-app-1db91.firebaseapp.com",
  projectId: "movie-app-1db91",
  storageBucket: "movie-app-1db91.appspot.com",
  messagingSenderId: "326442302496",
  appId: "1:326442302496:web:e1eda2afc90701fa409045"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
