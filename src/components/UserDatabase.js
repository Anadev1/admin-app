import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Navigation from './Navigation';
import MainCta from './MainCta';
import User from './Users';

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
                 <div className="page-header">
                      <h1 className="page-title">Users</h1>
                      <MainCta title="Create User" />
                 </div>

                 <div className="database-container">
                    {users.map(user => (
                         <User user= {user} />
                    ))}
                 </div>          
          </div>
          
    </div>
  );
}

export default UserDatabase;
