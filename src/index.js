
import "./styles/style.scss";
import { addSidebarEvents } from "./scripts/sidebar.js";
import { addHeaderEvents } from "./scripts/header.js";
import { renderModal } from "./scripts/modal.js";
import { addButtonEvents } from "./scripts/modal.js";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, addDoc, query, where } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addAuthEvents, showLogin } from "./scripts/auth";
import { getFirebaseID } from "./scripts/todo";


const firebaseConfig = {
  apiKey: "AIzaSyBPwH-PsSrwzFjr6v8LUMwbZkbFs8x7Uac",
  authDomain: "productiv-932c9.firebaseapp.com",
  projectId: "productiv-932c9",
  storageBucket: "productiv-932c9.appspot.com",
  messagingSenderId: "232110405285",
  appId: "1:232110405285:web:d37d1437bc93f077c13f4c",
  measurementId: "G-CR193YXW7R",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

//collection reference
const colRef = collection(db, 'tasks');

//queries
const q = query(colRef, where("project", "==", "home"))

//real time collection data

onSnapshot(colRef, (snapshot) => {
    let tasks = [];
    snapshot.docs.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
        getFirebaseID(doc.id);
        console.log(doc.id);
       
    });
    console.log(tasks);
})



document.body.appendChild(showLogin());

window.addEventListener("DOMContentLoaded", () => {
    addAuthEvents();
    addSidebarEvents();
    addHeaderEvents();
    // const modal = renderModal();
    // document.body.appendChild(modal);
    addButtonEvents();
});

//arguments email and password
//password must be at least 6 characters long
//find out about firebase displayName


export { colRef, db, auth };



