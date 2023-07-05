import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD38nrYUhLW1SyYnLBlmneWJnBJOGfK8n0",
    authDomain: "todo-app-vishwa.firebaseapp.com",
    projectId: "todo-app-vishwa",
    storageBucket: "todo-app-vishwa.appspot.com",
    messagingSenderId: "673724505239",
    appId: "1:673724505239:web:b97ee9cf335cc68784ddd2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {db , provider ,auth} ;
