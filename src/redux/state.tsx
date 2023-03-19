import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";
import {postsDataType} from "../components/Profile/MyPosts/Myposts";



export type messagesPageType={
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}


export type profilePageType={
    posts: postsDataType[]
}

export type statePropsType = {
    messagesPage: messagesPageType
    profilePage: profilePageType
}


let state: statePropsType = {

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
        ]
    }
}

export default state;