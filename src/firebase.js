// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsLuMSmCXApFQHnv5NugQi7MoNylUlncQ",
  authDomain: "linkedin-clone-4af55.firebaseapp.com",
  projectId: "linkedin-clone-4af55",
  storageBucket: "linkedin-clone-4af55.appspot.com",
  messagingSenderId: "511904971895",
  appId: "1:511904971895:web:c28abeaf3e221c1e469a72",
  measurementId: "G-WYT7946TL1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
