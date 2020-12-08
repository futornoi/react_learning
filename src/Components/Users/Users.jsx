import React from 'react';
import style from './Users.module.css'


function Users(props) {
   let usersEllement = props.users.map((u) => <div>{u.name},{u.location.country}</div>);
   return (
     <div>
        users
        { usersEllement }
     </div>
   );
}


export default Users;