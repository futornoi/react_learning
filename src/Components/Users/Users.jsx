import React from 'react';
import s from '../Messages/Messages.module.css';
import Preloader from "../common/Preloader/Preloader";
import Pagiator from "../common/Paginator/Pagiator";
import User from "./User";
import style from "./Users.module.css";


let Users = ({onPageChanger, users, page, totalPages, count, isFetching, followingIsProgress, unfollow, follow}) => {
   return (
      <div>
         <h2 className={s.title}>Users</h2>

         <Pagiator onPageChanger={onPageChanger} page={page} totalPages={totalPages} count={count}/>

         {isFetching ? <Preloader/> : null}

         <div className={style.scroll}>
            {users.map(u => <User key={u.id} user={u} followingIsProgress={followingIsProgress} unfollow={unfollow} follow={follow}/>)}
         </div>

      </div>
   )
}

export default Users;