import React, {KeyboardEvent} from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


// type MyPostsPropsType = {
//     store: StoreType
//
// }

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer >
            {(store)=>  {
            let state = store.getState()
                let addPostHandler = () => {
                    store.dispatch(AddPostAC())
                }

                let onPostChange = (text: string) => {
                   store.dispatch(UpdateNewPostTextAC(text))
                }

                let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Enter') {
                        addPostHandler()
                    }
                }
                return  <MyPosts updateNewPostText={onPostChange}
                         addPost={addPostHandler}
                         newPostText={state.profilePage.newPostText}
                         posts={state.profilePage.posts}/>
            }

            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;