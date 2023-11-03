// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9JQYoqNhYvRMudnTvoBgBVAK-spLp2uE",
  authDomain: "eco-cycle-connect.firebaseapp.com",
  projectId: "eco-cycle-connect",
  storageBucket: "eco-cycle-connect.appspot.com",
  messagingSenderId: "142458664128",
  appId: "1:142458664128:web:f2e33d3c96b3cc0ae5a925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth};