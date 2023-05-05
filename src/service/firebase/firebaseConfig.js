import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAKmJVcGuNGtx49cBRI-C3-yzxcmAyLXQ",
    authDomain: "ecommerce-243b8.firebaseapp.com",
    projectId: "ecommerce-243b8",
    storageBucket: "ecommerce-243b8.appspot.com",
    messagingSenderId: "184667607916",
    appId: "1:184667607916:web:a675bfd983f0ee7564d949"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)