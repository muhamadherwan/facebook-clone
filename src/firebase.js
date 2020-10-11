import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDAgnJojk1keooI95MNn111L8Co8Dbgj0",
    authDomain: "facebook-clone-25280.firebaseapp.com",
    databaseURL: "https://facebook-clone-25280.firebaseio.com",
    projectId: "facebook-clone-25280",
    storageBucket: "facebook-clone-25280.appspot.com",
    messagingSenderId: "545983959101",
    appId: "1:545983959101:web:beb83f62dfb449e102da54",
    measurementId: "G-VLZ4WZ8HKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
