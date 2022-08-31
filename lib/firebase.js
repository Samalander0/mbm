import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvV8XlUfmcQ2LxL_e8-wn-jppp4LfjK-g",
  authDomain: "beyondblocks.firebaseapp.com",
  projectId: "beyondblocks",
  storageBucket: "beyondblocks.appspot.com",
  messagingSenderId: "463187632926",
  appId: "1:463187632926:web:180712c1797b1b97b45f0f"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();