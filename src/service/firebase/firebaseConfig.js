import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjTNyqQqPXGQbxRG08yXfYzJLCFVgqC1M",
  authDomain: "ecommerce-78e9f.firebaseapp.com",
  projectId: "ecommerce-78e9f",
  storageBucket: "ecommerce-78e9f.appspot.com",
  messagingSenderId: "902010912615",
  appId: "1:902010912615:web:75aff1b82c6c0df61839c2"
};

  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)