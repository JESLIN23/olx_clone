import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC5m9duotOaYIxId6FMXO1lh2mREl64obs",
    authDomain: "olxproject-43286.firebaseapp.com",
    projectId: "olxproject-43286",
    storageBucket: "olxproject-43286.appspot.com",
    messagingSenderId: "88536001888",
    appId: "1:88536001888:web:7a13395bd71bd05ff9c205",
    measurementId: "G-BCL7WJEWT7"
  };


export default firebase.initializeApp(firebaseConfig);