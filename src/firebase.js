// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore"; // if you're using Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBejAK6fo8UYDS9gcIr-FdUJvmuFtEy59k",
    authDomain: "databasetest-99de3.firebaseapp.com",
    projectId: "databasetest-99de3",
    storageBucket: "databasetest-99de3.appspot.com",
    messagingSenderId: "33307783114",
    appId: "1:33307783114:web:0400daf92d7d132f37e933"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
