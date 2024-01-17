import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ActionTypes, messagesPageType} from "../../redux/store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
type mapDispatchToPropsType = {
    follow: (userId: number)=> void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount:(usersCount: number) => void
}

export type UsersPageType = mapStateToPropsType & mapDispatchToPropsType



let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
                dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(usersCount: number) => {
                dispatch(setTotalUsersCountAC(usersCount))
        }
        }

}


export default connect(mapStateToProps, mapDispatchToProps) (Users)