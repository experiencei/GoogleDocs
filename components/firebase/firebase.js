import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBTXybAZwVIy_Ofii8ha5TN3JdZtxPCAVQ",
    authDomain: "clone-a1c2d.firebaseapp.com",
    projectId: "clone-a1c2d",
    storageBucket: "clone-a1c2d.appspot.com",
    messagingSenderId: "261862721458",
    appId: "1:261862721458:web:58477ce8303feb5cf546ab"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;