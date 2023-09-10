import {ActionTypes, messagesPageType} from "./state";
import {messagesDataType} from "../components/Dialogs/Dialogs";

const DialogsReducer = (state: messagesPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: messagesDataType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
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
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        messageText
    } as const
}
export default DialogsReducer;