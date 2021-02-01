import React from 'react';
import style from './Users.module.css';
import avatar from '../../assets/images/icon.png';
import {NavLink} from "react-router-dom";


let User = ({user, followingIsProgress, unfollow, follow}) => {
   return (



          <div className={style.following} >
               <div className={style.mainInfo}>
                  <div>
                     <NavLink to={`profile/${user.id}`} className={style.avatar}>
                        <img src={user.photos.small != null ? user.photos.small : avatar} alt=""/>
                     </NavLink>
                  </div>

                  <div className={style.aboutUser}>
                     <div>
                        <div>{user.name}</div>
                        <div className={style.userStatus}>{user.status}</div>
                     </div>
                     <div className={style.location}>
                        <div>{'u.location.country'},</div>
                        <div>{'u.location.city'}</div>
                     </div>
                  </div>
               </div>
               <div>
                  {user.followed
                     ? <button disabled={followingIsProgress.some(id => id === user.id)} className={style.btn} onClick={() => {
                        unfollow(user.id)
                     }}>Unfollow</button>
                     : <button disabled={followingIsProgress.some(id => id === user.id)} className={style.btn} onClick={() => {
                        follow(user.id)
                     }}>Follow</button>
                  }
               </div>
            </div>

   )
}

export default User;