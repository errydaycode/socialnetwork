import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";
import {postsDataType} from "../components/Profile/MyPosts/Myposts";
import React from "react";
import {rerenderEntireTree} from "../render";



export type messagesPageType={
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}


export type profilePageType={
    posts: postsDataType[]
    newPostText: string
}

export type FriendsNavType={
    id: number
    name: string
    img: string
}

export type NavbarType={
    friends: FriendsNavType[]
}


export type statePropsType = {
    messagesPage: messagesPageType
    profilePage: profilePageType
    navbar: NavbarType

}

let avatars = "https://pristor.ru/wp-content/uploads/2019/09/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C-%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%A0%D1%8E%D0%BA%D0%B0010.jpg"

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
        ]
    },
    profilePage : {
        posts: [
            {id: 1, message: '"Yo, I\'m God of Death"', likesCount: 172},
            {id: 2, message: 'Wassup. Have you lost your Death Note?', likesCount: 172},
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

export const addPostCallBack =()=>{
    let newPost: postsDataType =  {id: 3, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}


export const updateNewPostText =(postMsg: string)=>{
    state.profilePage.newPostText = postMsg
    rerenderEntireTree(state);
}
