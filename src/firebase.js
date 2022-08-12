// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoG_5kGj_659ZfxHuNqJlNYd6e9EECygY",
  authDomain: "reel-insta-clone.firebaseapp.com",
  projectId: "reel-insta-clone",
  storageBucket: "reel-insta-clone.appspot.com",
  messagingSenderId: "1020764275650",
  appId: "1:1020764275650:web:df49b59bfaf09148f18c5b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()