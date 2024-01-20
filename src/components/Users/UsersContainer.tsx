import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import Users from "./Users";


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


 class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })

    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
        />
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)