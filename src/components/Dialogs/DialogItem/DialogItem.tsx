import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType ={
    name: string
    id: number
}

 export const DialogItem =(props: DialogItemType)=> {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )}