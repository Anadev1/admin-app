import React, { useState } from 'react';
import { db } from '../firebase';

const AddUser = () => {

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [role, setRole] = useState('');

     const onSubmit = e => {
          e.preventDefault()
          db
               .collection('users')
               .add({
                    name,
                    email,
                    role,
               })
          .then(() => setName(''), setEmail(''), setRole(''))
     }

     return (
          <div>
               <form onSubmit={onSubmit}>
                    <input placeholder="Name" value={name} name="name" onChange={e => setName(e.currentTarget.value)} type="text" />
                    <input placeholder="Email" value={email} name="email" onChange={e => setEmail(e.currentTarget.value)} type="text" />
                    <input placeholder="Role" value={role} name="role" onChange={e => setRole(e.currentTarget.value)} type="text" />
                    <button>Submit</button>
               </form>
          </div>
     );

};

export default AddUser;