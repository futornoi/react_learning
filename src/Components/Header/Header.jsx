import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header({login, logout, signIn}) {

  return (
      <header className={s.header}>
        <img className={s.logo} src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt='logo'/>
        <div className={s.login}>
           {signIn ? <div>{login} <button className={s.btn} onClick={logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>

  );
}

export default Header;
