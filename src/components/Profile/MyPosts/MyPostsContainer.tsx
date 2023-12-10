import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionTypes} from "../../../redux/store";
import MyPosts from "./MyPosts";



export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: postsDataType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let mappedPosts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let addPostHandler = () => {
        props.dispatch(AddPostAC())
    }

    let onPostChange = (text: string) => {
        props.dispatch(UpdateNewPostTextAC(text))
    }

    let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
     if    (e.key === 'Enter') {
         addPostHandler()
     }
    }
    return (
      <MyPosts updateNewPostText={onPostChange}/>
    );
};

export default MyPostsContainer;