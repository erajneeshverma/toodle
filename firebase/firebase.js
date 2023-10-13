import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeKIh8rkq-J71T87Nbv9tBauguY6wnw4M",
    authDomain: "todo-c69e6.firebaseapp.com",
    projectId: "todo-c69e6",
    storageBucket: "todo-c69e6.appspot.com",
    messagingSenderId: "533219332867",
    appId: "1:533219332867:web:a6812588cdba5baf4a0f36",
    measurementId: "G-ZPPH0VSC4Z"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
