import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAWdNuDFyZW10HAjYps9P_cis18zA50_y4",
  authDomain: "retro-reels-8a282.firebaseapp.com",
  projectId: "retro-reels-8a282",
  storageBucket: "retro-reels-8a282.appspot.com",
  messagingSenderId: "803580819914",
  appId: "1:803580819914:web:5c66361a76ec8124f63733",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
