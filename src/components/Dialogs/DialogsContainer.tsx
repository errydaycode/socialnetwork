import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes, messagesPageType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

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

// export const DialogsContainer = () => {
//
//
//
//     return ( <StoreContext.Consumer>
//             {(store) =>  {
//                 let state = store.getState().messagesPage
//                 const addMessage = () => {
//                     store.dispatch(AddMessageAC())
//                 }
//                 const onNewMessageChangeHandler = (newMessageBody: string) => {
//                     store.dispatch(UpdateNewMessageTextAC(newMessageBody))
//                 }
//                 return <Dialogs updateNewMessageBody={onNewMessageChangeHandler}
//                   state={state}
//                   newMessageText={state.newMessageText}
//                   addMessage={addMessage}/>
//                      }
//
//                     }
//     </StoreContext.Consumer>
//     )
// };

type mapStateToPropsType = {
    dialogsPage: messagesPageType
    newMessageText: string
    isAuth: boolean | undefined
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (newMessageBody: string)=> void
    addMessage: () => void
}


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


 let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
        return {
            dialogsPage: state.messagesPage,
            newMessageText: state.messagesPage.newMessageText,
            isAuth: state.auth.isAuth
        }
}
 let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
     return {
         updateNewMessageBody: (newMessageBody: string)=> {
             dispatch(UpdateNewMessageTextAC(newMessageBody))
         },
         addMessage: () => {
             dispatch(AddMessageAC())
         }
     }
 }

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
