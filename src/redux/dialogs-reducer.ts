import {ActionTypes} from "./store";
import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";


 let initialState = {
     dialogs: [
         {id: 1, name: 'Georgy'},
         {id: 2, name: 'Anna'},
         {id: 3, name: 'Ivan'},
         {id: 4, name: 'Liza'},
         {id: 5, name: 'Marina'},
         {id: 6, name: 'Roman'}
     ] as dialogsDataType[],
     messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How is your React?'},
         {id: 3, message: 'Awesome!'},
         {id: 4, message: 'Yo!'},
         {id: 5, message: 'Russia!'},
         {id: 6, message: 'USA!'}
     ] as messagesDataType[]
 };

export type InitialDialogsReducerStateType =  typeof initialState
const DialogsReducer = (state: InitialDialogsReducerStateType = initialState, action: ActionTypes): InitialDialogsReducerStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: messagesDataType = {
                id: state.messages.length + 1,
                message: action.newMessageText
            }
            return {
                ...state,
                    messages: [newMessage, ...state.messages],
            }

        default:
            return state
    }
}
export const AddMessageAC = (newMessageText: string)  => {
    return {
        type: 'SEND-MESSAGE',
        newMessageText
    } as const
}

export default DialogsReducer;