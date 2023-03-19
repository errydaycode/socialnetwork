import React from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {messagesPageType} from "../../redux/state";




export type dialogsDataType ={
    id: number
    name: string
}
export type messagesDataType ={
    id: number
    message: string
}

type DialogsPropsType={
    dialogs:dialogsDataType[]
    messages:messagesDataType[]
}

type stateProps={
    state:DialogsPropsType
}

export const Dialogs = (props:stateProps ) => {



    let mappedDialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let mappedMessages = props.state.messages.map(m => <Message message={m.message}/> )

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

