import React, {ChangeEvent} from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {alertNewMessage, messagesPageType, updateNewMessageText} from "../../redux/state";




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
    updateNewMessageText: (msg: string) => void
    alertNewMessage: ()=> void
    newMessageText: string
}

export const Dialogs = (props:stateProps ) => {



    let mappedDialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let mappedMessages = props.state.messages.map(m => <Message message={m.message}/> )



    const addMessage = ()=> {
        props.alertNewMessage()
    }

    const onNewMessageChangeHandler =(e: ChangeEvent<HTMLTextAreaElement>)=> {
       props.updateNewMessageText(e.currentTarget.value)
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
                <textarea value={props.newMessageText}  onChange={onNewMessageChangeHandler}></textarea>
                <button onClick={addMessage}>send message</button>
            </div>


        </div>
    );
};

