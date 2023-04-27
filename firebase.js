
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyALtTPK51TN5BBqhmwk-TJnFLZ1A1IEItg",
  authDomain: "manzil-284f9.firebaseapp.com",
  projectId: "manzil-284f9",
  storageBucket: "manzil-284f9.appspot.com",
  messagingSenderId: "578325273791",
  appId: "1:578325273791:web:cfc323fbd3a5778dd6ba0a"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)