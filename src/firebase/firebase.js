import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCo1nXt9-cd--uLQjjk3lUyXR4wNnMxJGU",
    authDomain: "medsafe-e8c83.firebaseapp.com",
    projectId: "medsafe-e8c83",
    storageBucket: "medsafe-e8c83.appspot.com",
    messagingSenderId: "799029542034",
    appId: "1:799029542034:web:b8bccc03d82bd499a9fa4b",
    measurementId: "G-KEYDHZC60F"
};

const fireApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth, fireApp }