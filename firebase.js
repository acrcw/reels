// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth} from 'firebase/auth'
import{getStorage} from 'firebase/storage'
import{getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEbh-txyO6Ir2BGawy978y2gscFsIfgM8",
  authDomain: "reels-fde10.firebaseapp.com",
  projectId: "reels-fde10",
  storageBucket: "reels-fde10.appspot.com",
  messagingSenderId: "850082497487",
  appId: "1:850082497487:web:23bb11035b79d99ee048ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
const db=getFirestore();
const storage = getAuth();
export {storage}
export {auth,db};

export default app;  