import React from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";




type dialogsDataType ={
    id: number
    name: string
}
type messagesDataType ={
    id: number
    message: string
}

export const Dialogs = () => {

    let dialogs: dialogsDataType[] = [
        {id: 1, name: 'Georgy'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Liza'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Roman'}
    ];

    let messages: messagesDataType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your React?'},
        {id: 3, message: 'Awesome!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Russia!'},
        {id: 6, message: 'USA!'}
    ];

    let mappedDialogs = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let mappedMessages = messages.map(m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                {mappedMessages}
            </div>
        </div>
    );
};

