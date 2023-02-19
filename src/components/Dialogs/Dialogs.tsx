import React from 'react';
import  s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType ={
    name: string
    id: number
}

const DialogItem =(props: DialogItemType)=> {
    let path = '/dialogs/' + props.id

   return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
    </div>
   )}

type MessagePropsType={
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Georgy'} id={1}/>
                <DialogItem name={'Anna'} id={2}/>
                <DialogItem name={'Ivan'} id={3}/>
                <DialogItem name={'Liza'} id={4}/>
                <DialogItem name={'Marina'} id={5}/>
                <DialogItem name={'Roman'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your React?'}/>
                <Message message={'Awesome!i'}/>
            </div>
        </div>
    );
};

