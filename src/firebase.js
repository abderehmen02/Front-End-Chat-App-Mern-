import * as firebase from 'firebase/app'
import 'firebase/auth'
import { functions } from 'firebase/app';
import 'firebase/firestore' ;
import 'firebase/firebase-storage' ;
import "dotenv" ;
const firebaseConfig = {

  apiKey: process.env.React_App_apiKey , 
  authDomain: process.env.React_App_authDomain ,
  projectId: process.env.React_App_projectId,
  storageBucket: process.env.React_App_storageBucket,
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_appId
};

// const firebaseConfig = {
//   apiKey: process.env.React_App_apiKey,
//   authDomain: process.env.React_App_authDomain,
//   projectId: "socialapp-2ba57",
//   storageBucket: process.env.React_App_storageBucket,
//   messagingSenderId: process.env.React_App_messagingSenderId,
//   appId: process.env.React_App_appId
// };


const FirebaseApp = firebase.initializeApp(firebaseConfig)
const db = FirebaseApp.firestore()
const auth = FirebaseApp.auth()
const FirebaseStorage = firebase.storage();
export {db , auth , FirebaseStorage}