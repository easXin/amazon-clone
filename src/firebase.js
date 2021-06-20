import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJt6OJJohWS3k8OEb4_24NFFY9pijocvo",
  authDomain: "challenge-d9db1.firebaseapp.com",
  projectId: "challenge-d9db1",
  storageBucket: "challenge-d9db1.appspot.com",
  messagingSenderId: "473205685738",
  appId: "1:473205685738:web:d603dd2a471ab21f8e0693",
  measurementId: "G-7VFPK0N2FD",
};

// first step
const firebaseApp = firebase.initializeApp(firebaseConfig);

// second step
const db = firebaseApp.firestore();

// third step
const auth = firebase.auth();

export {db, auth};