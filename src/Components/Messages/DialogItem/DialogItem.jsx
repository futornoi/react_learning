import React from 'react';
import s from './../Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
   return (
      <li className={s.dialog}><NavLink to={'/messages/' + id} activeClassName={s.active}>{name}</NavLink>
      </li>
   );
}


export default DialogItem;