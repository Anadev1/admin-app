// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './App.css';


const firebaseConfig = {
  apiKey: "AIzaSyAd2OY0fGtA7EtnqGvYuU-mcy1nJ_r4vWw",
  authDomain: "final-thesis-70d92.firebaseapp.com",
  databaseURL: "https://final-thesis-70d92-default-rtdb.firebaseio.com",
  projectId: "final-thesis-70d92",
  storageBucket: "final-thesis-70d92.appspot.com",
  messagingSenderId: "846382954146",
  appId: "1:846382954146:web:4fd5c08e5cdd54c25709fb"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    db.collection('users').get()
      .then(response => {
        const fetchedUsers = [];
        response.docs.forEach(document => {
          const fetchedUser = {
            id: document.id,
            ...document.data()
          };
          fetchedUsers.push(fetchedUser);
        });
        setUsers(fetchedUsers);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>Ops, there is an error :(</p>
      ) : null}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
