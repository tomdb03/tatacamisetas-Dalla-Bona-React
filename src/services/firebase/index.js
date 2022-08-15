import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCAJmwaskZzVUClP7HHsYCut41JO3M6BhU",
  authDomain: "tata-camisetas.firebaseapp.com",
  projectId: "tata-camisetas",
  storageBucket: "tata-camisetas.appspot.com",
  messagingSenderId: "973099144202",
  appId: "1:973099144202:web:a407bf89e414d90bfb7bf3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)