// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyRxpKsMcs2D5zY8wCPE3NQJ8Sv580gBw",
  authDomain: "port-75e62.firebaseapp.com",
  projectId: "port-75e62",
  storageBucket: "port-75e62.appspot.com",
  messagingSenderId: "642780510709",
  appId: "1:642780510709:web:4b6e8f771155624f0048bc",
  measurementId: "G-LX659WV0QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app)

export {firestore,analytics}

