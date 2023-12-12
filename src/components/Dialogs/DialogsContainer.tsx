import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

//
// export type dialogsDataType = {
//     id: number
//     name: string
// }
// export type messagesDataType = {
//     id: number
//     message: string
// }
//
// type DialogsPropsType = {
//     dialogs: dialogsDataType[]
//     messages: messagesDataType[]
// }
//
// type stateProps = {
//     store: StoreType
// }

export const DialogsContainer = () => {



    return ( <StoreContext.Consumer>
            {(store) =>  {
                let state = store.getState().messagesPage
                const addMessage = () => {
                    store.dispatch(AddMessageAC())
                }
                const onNewMessageChangeHandler = (newMessageBody: string) => {
                    store.dispatch(UpdateNewMessageTextAC(newMessageBody))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChangeHandler}
                  state={state}
                  newMessageText={state.newMessageText}
                  addMessage={addMessage}/>
                     }

                    }
    </StoreContext.Consumer>
    )
};

