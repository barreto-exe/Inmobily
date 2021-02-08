import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

// Inicializa Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB-D5GKthp-gSLwUeBxk78-qpkoIeA81n8",
  authDomain: "inmobily-dc783.firebaseapp.com",
  projectId: "inmobily-dc783",
  storageBucket: "inmobily-dc783.appspot.com",
  messagingSenderId: "1059413922941",
  appId: "1:1059413922941:web:22e0958f06712becab8d14",
});

// Autenticación
const auth = firebase.auth();
// Firestore (Base de datos)
const db = firebase.firestore();
// Analytics
const analytics = firebase.analytics();
// Storage
const storage = firebase.storage();

// Persistencia sin conexión
db.enablePersistence().catch(function (err) {
  // TODO: Manejar mejor el error
  console.log(err.message);
});

export { auth, db, analytics, storage };
