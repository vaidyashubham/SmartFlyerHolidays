import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCvjJgtNHOjWpC4kbmlm13iZ-hCuuy-VZQ",
  authDomain: "smartflyer-3537e.firebaseapp.com",
  databaseURL: "https://smartflyer-3537e-default-rtdb.firebaseio.com",
  projectId: "smartflyer-3537e",
  storageBucket: "smartflyer-3537e.appspot.com",
  messagingSenderId: "85539049825",
  appId: "1:85539049825:web:8abdf3855ed0efee403520"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var database = firebase.database();
export default firebase;