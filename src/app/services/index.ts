// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHfcOjpYZ0xC_tL-9CHbxdWIqF-319ug8",
  authDomain: "savannah-todos.firebaseapp.com",
  projectId: "savannah-todos",
  storageBucket: "savannah-todos.appspot.com",
  messagingSenderId: "732881615681",
  appId: "1:732881615681:web:9b1e58a784a18474e83fc0",
  measurementId: "G-VVJV7VH682",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
