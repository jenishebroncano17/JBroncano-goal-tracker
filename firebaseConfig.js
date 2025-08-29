
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaXgoGF0Wib-y3WF-rEOM62yYrhnFoFWo",
  authDomain: "goalproject-jab.firebaseapp.com",
  projectId: "goalproject-jab",
  storageBucket: "goalproject-jab.firebasestorage.app",
  messagingSenderId: "125185698792",
  appId: "1:125185698792:web:bae2a53402c09948ae525d"
};


const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)