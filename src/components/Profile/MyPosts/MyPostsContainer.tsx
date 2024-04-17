import React from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import {ActionTypes} from "../../../redux/store";
import MyPosts, {postsDataType} from "./MyPosts";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: postsDataType[]
}
type mapDispatchToPropsType = {
    addPostHandler: (text: string) => void
}


export type PostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): mapDispatchToPropsType => {
    return {
        addPostHandler: (text: string) => {
            dispatch(addPostAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;