import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDj2qjbUxarGhGyDTrZvHqSL1VXfbxDqx8",
  authDomain: "line-clone-5d8b0.firebaseapp.com",
  projectId: "line-clone-5d8b0",
  storageBucket: "line-clone-5d8b0.appspot.com",
  messagingSenderId: "327555907198",
  appId: "1:327555907198:web:d57353be9447b439fae22f",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
