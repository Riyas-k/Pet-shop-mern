
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCNvg-yRicZ95mCgh3Q4WA42hcuxA0hTyA",
  authDomain: "veterinary-dd5cf.firebaseapp.com",
  projectId: "veterinary-dd5cf",
  storageBucket: "veterinary-dd5cf.appspot.com",
  messagingSenderId: "144504624022",
  appId: "1:144504624022:web:fe7e3ff4d622637bc8c3b7",
  measurementId: "G-QBT09DTTN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);

export const storage=getStorage(app)

export default app


