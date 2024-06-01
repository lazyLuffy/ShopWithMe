// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqM9cddO7exbUuTRpm60ZO_bOqoIRJi2g",
    authDomain: "myshoppingapp-fd7de.firebaseapp.com",
    projectId: "myshoppingapp-fd7de",
    storageBucket: "myshoppingapp-fd7de.appspot.com",
    messagingSenderId: "877425979983",
    appId: "1:877425979983:web:e553d7605724f5a585703a"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
