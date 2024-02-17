import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import React from "react";
import ProfileReducer, {AddPostAC, UpdateNewPostTextAC} from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer, {AddMessageAC, UpdateNewMessageTextAC} from "./dialogs-reducer";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "./users-reducer";

export type messagesPageType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
    newMessageText: string
}
export type profilePageType = {
    posts: postsDataType[]
    newPostText: string
}
export type FriendsNavType = {
    id: number
    name: string
    img: string
}
export type NavbarType = {
    friends: FriendsNavType[]
}
export type statePropsType = {
    messagesPage: messagesPageType
    profilePage: profilePageType
    navbar: NavbarType

}
export let avatars = "https://static.mk.ru/upload/entities/2019/02/05/16/articles/facebookPicture/1e/3d/4d/c0/8c2d70267a07ec38f9e61811170bb911.jpg"
export type StoreType = {
    _state: statePropsType,
    _callSubscriber: ()=> void
    subscribe: (callback: ()=> void) => void
    getState: ()=> statePropsType
    dispatch: (action: ActionTypes) => void
}


export type ActionTypes = ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC>|
    ReturnType<typeof AddMessageAC> | ReturnType<typeof UpdateNewMessageTextAC> |
    ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
| ReturnType<typeof setCurrentPageAC>
| ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof setIsFetchingAC>


export const store: StoreType = {
    // приватные методы и свойства
    _state:  {
        messagesPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Ты... это...заходи, если что!..', likesCount: 172},
                {id: 2, message: 'Щас спою!', likesCount: 172},
            ],
            newPostText: ''
        },

        navbar: {
            friends: [
                {id: 1, name: 'Marina', img: avatars},
                {id: 2, name: 'Anna', img: avatars},
                {id: 3, name: 'Liza', img: avatars},
            ]
        }
    },
    _callSubscriber(){
        console.log('state has changed')
    },
    // не меняют стейт
    subscribe(observer){
        this._callSubscriber = observer // паттерн - обсервер. по факту это и есть настоящий рендер три, который пришел параметром как колл бэк
        // паблишер-субскрайбер тож читануть мб // по этому же паттерну работает addEventListener // onChange тоже
    },
    getState(){
        return this._state
    },
    // меняет стейт
    dispatch(action) { // стейт всегда меняется только через диспатч экшоноф))
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.messagesPage = DialogsReducer(this._state.messagesPage, action)
        this._state.navbar = SidebarReducer(this._state.navbar, action)
        this._callSubscriber()

    }
}


