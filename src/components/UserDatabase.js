import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Navigation from './Navigation';
import MainCta from './MainCta';
import User from './Users';
import AddUser from './AddUser';

const UserDatabase = () => {

     const handleOnDelete = id => {
     // setUsers(users.filter(user => user.id !== id))
     db
          .collection("users")
          .doc(id)
          .delete();
     };

     const [users, setUsers] = useState([]) 
     useEffect(() => {
     
     const unsubscribe = db
          .collection("users") 
          .onSnapshot(snapshot => {
          const listUsers = snapshot.docs.map(doc => ({
               id: doc.id,
               ...doc.data(),
          }))
          setUsers(listUsers)
          })
          
     return () => unsubscribe()
     }, [])
     

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
                         <User user={user} clickHandler={handleOnDelete} />
                    ))}
                    <AddUser />
                 </div>          
          </div>
          
    </div>
  );
}

export default UserDatabase;
