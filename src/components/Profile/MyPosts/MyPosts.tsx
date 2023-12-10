import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionTypes} from "../../../redux/store";



export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: postsDataType[]
    newPostText?: string
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}

const
    MyPosts = (props: MyPostsPropsType) => {

        let mappedPosts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

        let onAddPost = () => {
            props.addPost()
        }
            let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                let text = e.currentTarget.value
                props.updateNewPostText(text)
            }

            let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === 'Enter') {
                    onAddPost()
                }
            }
            return (
                <div className={s.postsBlock}>
                    <h3>My posts</h3>
                    <div>
                        <div>
                            <textarea value={props.newPostText} onChange={onPostChange} onKeyPress={onKeyPressHandler}/>
                        </div>
                        <div>
                            <button onClick={onAddPost}>Add post</button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        {mappedPosts}
                    </div>
                </div>
            );
        };

export default MyPosts;