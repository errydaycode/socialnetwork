import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import React from "react";


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

let avatars = "https://static.mk.ru/upload/entities/2019/02/05/16/articles/facebookPicture/1e/3d/4d/c0/8c2d70267a07ec38f9e61811170bb911.jpg"


let rerenderEntireTree = () => {
    console.log('hello')
}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export let state: statePropsType = {

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
}

export const addPostCallBack = () => {
    let newPost: postsDataType =
        {
            id: state.profilePage.posts.length + 1,
            message: state.profilePage.newPostText,
            likesCount: 0
        };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}


export const updateNewPostText = (postMsg: string) => {
    state.profilePage.newPostText = postMsg
    rerenderEntireTree();
}

export const updateNewMessageText = (newMessage: string) => {
    state.messagesPage.newMessageText = newMessage
    rerenderEntireTree()
}

export const addNewMessage = () => {
    const newMessage: messagesDataType = {
        id: state.messagesPage.messages.length + 1,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree()
}

