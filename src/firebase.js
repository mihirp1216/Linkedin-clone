import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtDrDSJ6ySbZcqRxvlFeLYptgJAlQ4J2c",
    authDomain: "linkedin-clone-ead53.firebaseapp.com",
    projectId: "linkedin-clone-ead53",
    storageBucket: "linkedin-clone-ead53.appspot.com",
    messagingSenderId: "495283849741",
    appId: "1:495283849741:web:72074aaa10cee98e002344"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };