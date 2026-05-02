// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe403fv6V4WwEzZlYK2Mj_vRgYKzuKlL0",
    authDomain: "skill-swap-d66e4.firebaseapp.com",
    projectId: "skill-swap-d66e4",
    storageBucket: "skill-swap-d66e4.firebasestorage.app",
    messagingSenderId: "2060858175",
    appId: "1:2060858175:web:5b019c05c26c882dccd98a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;