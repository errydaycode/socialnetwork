import {ActionTypes, messagesPageType} from "./store";
import {messagesDataType} from "../components/Dialogs/Dialogs";


 let initialState = {
     dialogs: [
         {id: 1, name: 'Georgy'},
         {id: 2, name: 'Anna'},
         {id: 3, name: 'Ivan'},
         {id: 4, name: 'Liza'},
         {id: 5, name: 'Marina'},
         {id: 6, name: 'Roman'}
     ],

     messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How is your React?'},
         {id: 3, message: 'Awesome!'},
         {id: 4, message: 'Yo!'},
         {id: 5, message: 'Russia!'},
         {id: 6, message: 'USA!'}
     ],
     newMessageText: ''
 };

const DialogsReducer = (state: messagesPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: messagesDataType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPD-NEW-MESSAGE-TEXT":
            state.newMessageText = action.messageText
            return state;
        default:
            return state
    }
}
export const AddMessageAC = ()  => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const UpdateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPD-NEW-MESSAGE-TEXT',
        messageText
    } as const
}
export default DialogsReducer;