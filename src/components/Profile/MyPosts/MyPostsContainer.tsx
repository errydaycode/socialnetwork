import React, {KeyboardEvent} from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import { StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";




type MyPostsPropsType = {
    store: StoreType

}

const MyPostsContainer = (props: MyPostsPropsType) => {


    let state = props.store.getState()

    let addPostHandler = () => {
        props.store.dispatch(AddPostAC())
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(UpdateNewPostTextAC(text))
    }

    let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostHandler()
        }
    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPostHandler}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>
    );
};

export default MyPostsContainer;