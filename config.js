import * as firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC9iTFeyFe3m7-IQKR2a6FOgnxv2pyU31Q",
    authDomain: "storyhub-b156c.firebaseapp.com",
    databaseURL: "https://storyhub-b156c.firebaseio.com",
    projectId: "storyhub-b156c",
    storageBucket: "storyhub-b156c.appspot.com",
    messagingSenderId: "414720550999",
    appId: "1:414720550999:web:d1972a1e032447144a1b12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()