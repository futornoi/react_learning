import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Nav.module.css';

function Navigation() {
    return (
        <nav className={s.navbar}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music">Music</NavLink></li>
                <li className={s.item}/>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.item}/>
                <li className={s.item}><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
