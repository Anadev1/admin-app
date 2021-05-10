import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Navigation from './Navigation';

const UserDatabase = () => {
      const [users, setUsers] = useState([]);

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
  }, []);

  return (
    <div className="content">

          <Navigation />
            <div className="main-container">
                 <h1 className="page-title">Users</h1>
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