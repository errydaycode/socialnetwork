import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {authStatePropsType} from "./HeaderContainer";
import {logoutTC} from "../../redux/auth-reducer";



export const Header = (props: authStatePropsType) => {
    return (
        <header className={s.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>  {props.login}  - <button onClick={props.logoutTC}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
};

