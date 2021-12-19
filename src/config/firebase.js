import firebase from 'firebase/app';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyBgbh62sbGQCu_MrGHdxKC1vUvvUEw-78E",
    authDomain: "assignment2-827f4.firebaseapp.com",
    databaseURL: "https://assignment2-827f4.firebaseio.com",
    projectId: "assignment2-827f4",
    storageBucket: "assignment2-827f4.appspot.com",
    messagingSenderId: "688015658342",
    appId: "1:688015658342:web:4dd6c35105f8a1c7dd8ca7",
    measurementId: "G-3ZV1EW1EKZ"
  };
  //  Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);