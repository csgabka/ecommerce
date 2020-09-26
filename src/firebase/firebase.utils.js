import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "ecommerce-1bb9a.firebaseapp.com",
    databaseURL: "https://ecommerce-1bb9a.firebaseio.com",
    projectId: "ecommerce-1bb9a",
    storageBucket: "ecommerce-1bb9a.appspot.com",
    messagingSenderId: "1071503497540",
    appId: "1:1071503497540:web:eba1382e6d54ee091c9f11",
    measurementId: "G-2ZNYDXR3HH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
