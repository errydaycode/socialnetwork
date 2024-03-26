import React from 'react';
import {AddMessageAC} from "../../redux/dialogs-reducer";
import {ActionTypes, messagesPageType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
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

    isAuth: boolean | undefined
}
type mapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
}


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


 let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
        return {
            dialogsPage: state.messagesPage,
            isAuth: state.auth.isAuth
        }
}
 let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>):mapDispatchToPropsType  => {
     return {
         addMessage: (newMessageText: string) => {
             dispatch(AddMessageAC(newMessageText))
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
