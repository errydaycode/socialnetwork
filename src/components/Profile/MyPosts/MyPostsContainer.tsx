import React, {KeyboardEvent} from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionTypes, profilePageType, StoreType} from "../../../redux/store";
import MyPosts, {postsDataType} from "./MyPosts";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


// type MyPostsPropsType = {
//     store: StoreType
//
// }

// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 let addPostHandler = () => {
//                     store.dispatch(AddPostAC())
//                 }
//
//                 let onPostChange = (text: string) => {
//                     store.dispatch(UpdateNewPostTextAC(text))
//                 }
//
//                 let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//                     if (e.key === 'Enter') {
//                         addPostHandler()
//                     }
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPostHandler}
//                     newPostText={state.profilePage.newPostText}
//                     posts={state.profilePage.posts}/>
//             }
//
//             }
//         </StoreContext.Consumer>
//     );
// };


type mapStateToPropsType = {
    newPostText: string
    posts: postsDataType[]
}
type mapDispatchToPropsType = {
    addPostHandler: ()=> void
    onPostChange: (text: string) => void
}


export type PostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>):mapDispatchToPropsType  => {
    return {
        addPostHandler: () => {
            dispatch(AddPostAC())
        },
        onPostChange:(text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps )(MyPosts)

export default MyPostsContainer;