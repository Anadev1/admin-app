import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyAd2OY0fGtA7EtnqGvYuU-mcy1nJ_r4vWw",
  authDomain: "final-thesis-70d92.firebaseapp.com",
  databaseURL: "https://final-thesis-70d92-default-rtdb.firebaseio.com",
  projectId: "final-thesis-70d92",
  storageBucket: "final-thesis-70d92.appspot.com",
  messagingSenderId: "846382954146",
  appId: "1:846382954146:web:4fd5c08e5cdd54c25709fb"
});


const db = firebaseApp.firestore();

export { db };