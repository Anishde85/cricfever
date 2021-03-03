import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBOltEE3URXFesOchKCKfCKXDaf_R2cd4o",
    authDomain: "cricfever-82525.firebaseapp.com",
    projectId: "cricfever-82525",
    storageBucket: "cricfever-82525.appspot.com",
    messagingSenderId: "799102028429",
    appId: "1:799102028429:web:c1080b2b046afc602430c4",
    measurementId: "G-V2F79RDWZB"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  
  export default db;