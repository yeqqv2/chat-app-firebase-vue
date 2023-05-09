import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCo5TbP_KT1KJV7QYduVe7R9-k0IMVFPWw",
    authDomain: "vue3-firebase-projeler-f232f.firebaseapp.com",
    projectId: "vue3-firebase-projeler-f232f",
    storageBucket: "vue3-firebase-projeler-f232f.appspot.com",
    messagingSenderId: "640079912506",
    appId: "1:640079912506:web:afdbbf254244c02f511f03"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const tarih = firebase.firestore.FieldValue.serverTimestamp;

const auth = firebase.auth()

export { db, tarih, auth }