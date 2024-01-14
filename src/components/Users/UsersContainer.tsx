import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ActionTypes, messagesPageType} from "../../redux/store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";


type mapStateToPropsType = {
    users: UserType[]

}
type mapDispatchToPropsType = {
    follow: (userId: number)=> void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPageType = mapStateToPropsType & mapDispatchToPropsType



let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): mapDispatchToPropsType => {
    return {
            follow: (userId: number) => {
                dispatch(followAC(userId))
            },
             unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
        }

}


export default connect(mapStateToProps, mapDispatchToProps) (Users)