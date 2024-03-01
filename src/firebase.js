// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NvWevNXE3SzW24fRdhHnmW5VYy4d4jc",
  authDomain: "test-c720c.firebaseapp.com",
  projectId: "test-c720c",
  storageBucket: "test-c720c.appspot.com",
  messagingSenderId: "370541370343",
  appId: "1:370541370343:web:3194ac9c824ee0a97f7b42",
  measurementId: "G-G5YFKKRGLP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
export { db }