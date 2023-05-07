import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjTNyqQqPXGQbxRG08yXfYzJLCFVgqC1M",
  authDomain: "ecommerce-78e9f.firebaseapp.com",
  projectId: "ecommerce-78e9f",
  storageBucket: "ecommerce-78e9f.appspot.com",
  messagingSenderId: "902010912615",
  appId: "1:902010912615:web:75aff1b82c6c0df61839c2"
};


export const getNumericIdByDocumentId = async (db, documentId) => {
  const productRef = collection(db, 'products');
  const productSnapshot = await getDocs(productRef);
  const products = productSnapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));

  const product = products.find(product => product.id === documentId);
  return product ? product.docId : null;
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
