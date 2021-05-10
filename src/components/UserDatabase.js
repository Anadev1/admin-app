import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Navigation from './Navigation';

const UserDatabase = () => {
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
      
            <div>
          <Navigation />
        {users.map(user => (
          <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Role: {user.role}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default UserDatabase;