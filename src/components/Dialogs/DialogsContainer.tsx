import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}

type stateProps = {
    store: StoreType
}

export const DialogsContainer = (props: stateProps) => {

    let state = props.store.getState().messagesPage


    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }
    const onNewMessageChangeHandler = (newMessageBody: string) => {
        props.store.dispatch(UpdateNewMessageTextAC(newMessageBody))
    }


    return <Dialogs updateNewMessageBody={onNewMessageChangeHandler}
                    state={state}
                    newMessageText={state.newMessageText}
                    addMessage={addMessage}
    />
};

