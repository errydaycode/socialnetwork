import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import { NavbarPropsType} from "./NavbarContainer";


//
// type NavbarPropsType={
//     state: NavbarType
// }


export const Navbar = (props: NavbarPropsType) => {


                let mappedFriends = props.friends.map((el) => { // ??
                    return (
                        <div key={el.id}  className={s.friendsNames}>
                            <img src={el.img} alt="avas"/>
                            <span>{el.name} </span>
                        </div>
                    )
                })

              return (  <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
                    </div>
                      <div className={`${s.item} ${s.active}`}>
                        <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
                    </div>
                    <div className={s.friends}>
                        Friends
                        {mappedFriends}
                    </div>
                </nav>
    );
};


