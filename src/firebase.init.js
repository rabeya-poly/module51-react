// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWWiu_OmHNp_sUXSmWGzZX443uF1Ip_Y0",
  authDomain: "auth-module51-9bf4f.firebaseapp.com",
  projectId: "auth-module51-9bf4f",
  storageBucket: "auth-module51-9bf4f.firebasestorage.app",
  messagingSenderId: "384892194989",
  appId: "1:384892194989:web:b71984f6b73b10a0ba3624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
