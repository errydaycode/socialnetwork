import React, {ChangeEvent, KeyboardEvent}  from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, AddMessageAC, UpdateNewMessageTextAC} from "../../redux/state";


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
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export const Dialogs = (props:stateProps ) => {

    let mappedDialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let mappedMessages = props.state.messages.map(m => <Message message={m.message}/> )

    const addMessage = ()=> {
        props.dispatch(AddMessageAC())
    }
    const onKeyDownHandler =(e: KeyboardEvent<HTMLTextAreaElement>)=> {
        if(e.key === 'Enter') {
            addMessage()
        }
    }
    const onNewMessageChangeHandler =(e: ChangeEvent<HTMLTextAreaElement>)=> {
       props.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))
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
                <textarea onKeyDown={onKeyDownHandler} value={props.newMessageText}  onChange={onNewMessageChangeHandler}></textarea>
                <button  onClick={addMessage}>send message</button>
            </div>


        </div>
    );
};

