// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ3Kk7JVx8wFdiqQ4hUe2mRBVzuA8NzAo",
  authDomain: "brand-shop-assignment.firebaseapp.com",
  projectId: "brand-shop-assignment",
  storageBucket: "brand-shop-assignment.appspot.com",
  messagingSenderId: "64111998915",
  appId: "1:64111998915:web:2e178acf76c962bbe92f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;