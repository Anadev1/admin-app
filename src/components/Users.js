import React, { useState } from 'react';
import deleteIcon from '../assets/images/delete_icon.svg';


const User = (props) => {

    
     const [visibility, setVisibility] = useState('none');

     const buttonsStyle = {
          display: `${visibility}`
     };

  return (
    
     <div key={props.user.id} className="user" onMouseEnter={() => setVisibility('flex')} onMouseLeave={() => setVisibility('none')}>
          <div className="user__details-container">
               <p className="user__name">{props.user.name}</p>
               <p className="user__email">{props.user.email}</p>
          </div>
          <div className="user__role-container">
               <p className="user__role">{props.user.role}</p>
          </div>
          <div className="user__actions-container" style={buttonsStyle}>
               <button className="user__reset-password">Reset password</button>
               <button className="user__delete"><img src={deleteIcon}></img></button>
          </div>
     </div>
  );
}

export default User;
