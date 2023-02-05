
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi4vYOu16dc1dgjB9_xxkt-Pu3gzalHzk",
  authDomain: "clone-58a50.firebaseapp.com",
  projectId: "clone-58a50",
  storageBucket: "clone-58a50.appspot.com",
  messagingSenderId: "217352622191",
  appId: "1:217352622191:web:393fe1b0ee5d548598bd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth();

export {db, auth}