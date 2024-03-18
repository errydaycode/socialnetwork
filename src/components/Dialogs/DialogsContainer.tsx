import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ActionTypes, messagesPageType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedicrect} from "../../hoc/withAuthRedicrect";

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


 let mapStateToProps = (state: AppRootStateType) => {
        return {
            dialogsPage: state.messagesPage,
            newMessageText: state.messagesPage.newMessageText,
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

// let AuthRedirectComponent = withAuthRedicrect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

 export default compose<React.ComponentType>(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedicrect
 )
 (Dialogs)


//
