import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQWZ6SCtdGJFCgQRXTeW8D1seLRwP59_Y",
  authDomain: "firegram-40252.firebaseapp.com",
  projectId: "firegram-40252",
  storageBucket: "firegram-40252.appspot.com",
  messagingSenderId: "123229095597",
  appId: "1:123229095597:web:12271d432234200f212824",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
