import React from 'react';
import style from './Users.module.css'
import s from "../Messages/Messages.module.css";
import * as axios from 'axios';
import avatar from '../../assets/images/icon.png'


function Users(props) {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         props.setUsers(response.data.items)
      })
   }


   return <div>
      <h2 className={s.title}>Users</h2>
      {props.users.map((u) => <div className={style.following} key={u.id}>
         <div className={style.mainInfo}>
            <div>
               <div className={style.avatar}>
                  <img src={u.photos.large != null ? u.photos.large : avatar} alt=""/>
               </div>
            </div>

            <div className={style.aboutUser}>
               <div>
                  <div>{u.name}</div>
                  <div className={style.userStatus}>{u.status}</div>
               </div>
               <div className={style.location}>
                  <div>{'u.location.country'},</div>
                  <div>{'u.location.city'}</div>
               </div>
            </div>
         </div>
         <div>
            {u.following
               ? <button className={style.btn} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
               : <button className={style.btn} onClick={() => {props.followed(u.id)}}>Follow</button>
            }
         </div>
         </div>)}
      </div>

      }

      export default Users;