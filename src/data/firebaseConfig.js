// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrhoFWSVq3jC2SaGY0Av9YWuTPdSx2E0U",
  authDomain: "nuna-espiritu-de-la-tierra.firebaseapp.com",
  projectId: "nuna-espiritu-de-la-tierra",
  storageBucket: "nuna-espiritu-de-la-tierra.appspot.com",
  messagingSenderId: "300578757160",
  appId: "1:300578757160:web:c10c31ac0752da5cdb731d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db