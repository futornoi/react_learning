import React from 'react';
import s from './Header.module.css';


function Header() {
  return (
      <header className={s.header}>
        <img className={s.logo} src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png"
             alt="logo"/>
      </header>

  );
}

export default Header;
