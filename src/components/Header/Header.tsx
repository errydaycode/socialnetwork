import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


// type HeaderProps = {
//     isAuth: boolean;
//     login: string;
//     setAuthUserData: (data: userAuthDataType) => void;
// };
export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
};

