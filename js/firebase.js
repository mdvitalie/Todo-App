// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDP85s3zhBMvmoZo0TXLENy1lTEt8CimGg",
  authDomain: "todo-app-5c811.firebaseapp.com",
  projectId: "todo-app-5c811",
  storageBucket: "todo-app-5c811.appspot.com",
  messagingSenderId: "73944981628",
  appId: "1:73944981628:web:f82ff688f16af2712de9f9",
  measurementId: "G-0YLC3LVYVW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();