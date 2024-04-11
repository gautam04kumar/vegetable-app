// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_XomG0xZd0RiUBgaTEMClNr6tYLnqK8",
  authDomain: "fruit-app3.firebaseapp.com",
  projectId: "fruit-app3",
  storageBucket: "fruit-app3.appspot.com",
  messagingSenderId: "363379875030",
  appId: "1:363379875030:web:67fb157ea568a02f123d77"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app); 
 export const storage = getStorage(app); 

 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);