import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow, followingProgressType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: followingProgressType

}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching : (isFetching: boolean) => void
    toggleFollowingProgress:  (isFollowing: boolean, userId: number) => void
}
export type UsersPageType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollow(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (usersCount: number) => {
//             dispatch(setTotalUsersCount(usersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
//
// }

class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.items)
                this.props.setTotalUsersCount(res.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.items)
                this.props.toggleIsFetching(false)
            })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)


// Server API - API сервера(интерфейс) как с сервером взаимодействовать
// Надо знать : 1. URL адрес на который слать запрос
// Надо знать : 2. Тип запроса - get/post
// Надо знать : 3/4. request data/response data - что отправляем на сервер и что получаем
//Надо знать : 5. HttpCodes 404, 3xx - redirect, 5xx-server, 2xx- OK. Коды ответа от сервера.

// Server REST API - определенный набор правил . До недавних пор хватало правил Server API ,
// но с появлением SPA, запросы стали более частые, более умные, и понадобились правила, как это все
// объеденить в небольшой свод правил, чтобы от проекта к проекту была согласованность работы с сервером.
// До ввода правил REST API, пользовались только get и post запросом, отправляя их на нужный URL -
// "....com/api/users/get" - get
// "....com/api/users/create" - post
// "....com/api/users/update" - post
// "....com/api/users/delete" - post
// GET-POST . То есть для каждой сущности на сервере было 4 endpoint'a .
// Со временем, это стало не очень удобно и было принятно решение сделать свод правил REST API, в котором все запросы
// Делаются на один endpoint - "....com/api/users" - get/post/put/delete, но с разным типом запросов, в зависимости от того, что хотим получить.
// GET-POST-PUT-DELETE (CRUD)
// Прикладная реализация REST API - мы имеем одну сущность(endpoint) и работаем с ней, направляя разные типы запросов
