const firebaseConfig = {
  apiKey: "",
  authDomain: ".firebaseapp.com",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-"

  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const prodRef = dbRef.child('prod');

