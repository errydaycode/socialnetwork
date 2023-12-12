import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsNavType, NavbarType} from "../../redux/store";
import StoreContext from "../../StoreContext";


//
// type NavbarPropsType={
//     state: NavbarType
// }


export const Navbar = () => {


    return (
        <StoreContext.Consumer>
            {(store)=> {


                let mappedFriends = store.getState().navbar.friends.map(el => {
                    return (
                        <div  className={s.friendsNames}>
                            <img src={el.img} alt="avas"/>
                            <span>{el.name} </span>
                        </div>
                    )
                })

              return  <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
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

            }
            }
        </StoreContext.Consumer>
    );
};

