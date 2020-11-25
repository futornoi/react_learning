import React from 'react';
import s from './Header.module.css';


function Header() {
  return (
      <header className={s.header}>
        <img className={s.logo} src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt='logo'/>
      </header>

  );
}

export default Header;
