import React from 'react';
import style from './Users.module.css'
import s from "../Messages/Messages.module.css";


function Users(props) {
   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
            name: 'Maks',
            location: {
               country: 'Ukraine',
               city: 'Odessa',
            },
            status: 'i\'m future boss',
            following: true,
         },
         {
            id: 2,
            avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
            name: 'Maks2',
            location: {
               country: 'Ukraine2',
               city: 'Odessa2',
            },
            status: 'i\'m future boss2',
            following: false,
         },
         {
            id: 3,
            avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
            name: 'Maks3',
            location: {
               country: 'Ukraine3',
               city: 'Odessa3',
            },
            status: 'i\'m future boss3',
            following: true,
         },
      ])
   }

   return <div>
      <h2 className={s.title}>Users</h2>
      {props.users.map((u) => <div className={style.following} key={u.id}>
         <div className={style.mainInfo}>
            <div>
               <div className={style.avatar}>
                  <img src={u.avatar} alt=""/>
               </div>
            </div>

            <div className={style.aboutUser}>
               <div>
                  <div>{u.name}</div>
                  <div className={style.userStatus}>{u.status}</div>
               </div>
               <div className={style.location}>
                  <div>{u.location.country},</div>
                  <div>{u.location.city}</div>
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