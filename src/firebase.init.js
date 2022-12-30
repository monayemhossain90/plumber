// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey:"AIzaSyCMvzKu-a1CCK91FDT2t5ZLG8z5tbo_P6Q",
//   authDomain:"independent-service-prov-7c1de.firebaseapp.com",
//   projectId:"independent-service-prov-7c1de",
//   storageBucket:"independent-service-prov-7c1de.appspot.com",
//   messagingSenderId:"35105848335",
//   appId:"1:35105848335:web:73a052aa8813afe270f77a",
// };


// const firebaseConfig = {
//   apiKey:"AIzaSyDbfj6pueH4mBKSyb95NJaSBH4rMk8HKCE",
//   authDomain:"plumber-615a2.firebaseapp.com",
//   projectId:"plumber-615a2",
//   storageBucket:"plumber-615a2.appspot.com",
//   messagingSenderId:"316971021036",
//   appId:"1:316971021036:web:958963f2f23d0052efebc9",
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;