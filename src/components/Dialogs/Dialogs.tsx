import React from 'react';
import  s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}> Georgy </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}> Anna </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}> Roman </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}> Ivan </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}> Liza </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}> Marina </NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    How is your React?
                </div>
                <div className={s.message}>
                    Awesome!
                </div>
            </div>
        </div>
    );
};

