import React, {ChangeEvent, KeyboardEvent}  from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import { AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes} from "../../redux/store";
import {DialogsPropsType} from "./DialogsContainer";


// export type dialogsDataType ={
//     id: number
//     name: string
// }
// export type messagesDataType ={
//     id: number
//     message: string
// }
//
// type DialogsPropsType={
//     dialogs:dialogsDataType[]
//     messages:messagesDataType[]
// }

// type stateProps={
//     state:DialogsPropsType
//     newMessageText: string
//     updateNewMessageBody: (newBody: string) => void
//     addMessage: ()=> void
// }

export const Dialogs = (props:DialogsPropsType ) => {

    let mappedDialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let mappedMessages = props.dialogsPage.messages.map(m => <Message message={m.message}/> )

    const addMessage = ()=> {
        props.addMessage()
    }
    const onKeyDownHandler =(e: KeyboardEvent<HTMLTextAreaElement>)=> {
        if(e.key === 'Enter') {
            addMessage()
        }
    }
    const onNewMessageChangeHandler =(e: ChangeEvent<HTMLTextAreaElement>)=> {
        let newMessageBody = e.currentTarget.value
        props.updateNewMessageBody(newMessageBody)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                {mappedMessages}
            </div>
            <div>
                <textarea
                    placeholder={'Type...'}
                        onKeyDown={onKeyDownHandler}
                          value={props.newMessageText}
                          onChange={onNewMessageChangeHandler}>
                </textarea>
                <button  onClick={addMessage}>send message</button>
            </div>

        </div>
    );
};

