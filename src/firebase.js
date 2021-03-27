import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN7DMGBxXAwxxZcmoYOGmsPeBCZEz5q_4",
  authDomain: "whatsapp-clone-4cdb2.firebaseapp.com",
  projectId: "whatsapp-clone-4cdb2",
  storageBucket: "whatsapp-clone-4cdb2.appspot.com",
  messagingSenderId: "840648273428",
  appId: "1:840648273428:web:cfd6ead8afb81fbe82c101",
  measurementId: "G-CWC65D9K62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;