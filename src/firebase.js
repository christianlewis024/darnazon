import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyB7CyZIyx6g-RuKjasAFck2erqWcDkdeNI",
  authDomain: "darnazon.firebaseapp.com",
  databaseURL: "https://darnazon.firebaseio.com",
  projectId: "darnazon",
  storageBucket: "darnazon.appspot.com",
  messagingSenderId: "458799851529",
  appId: "1:458799851529:web:155e676348c37770bf70d8",
  measurementId: "G-607EZF42EY"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}