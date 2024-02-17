import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";


export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

// type MyPostsPropsType = {
//     posts: postsDataType[]
//     newPostText?: string
//     addPost: ()=> void
//     updateNewPostText: (text: string)=> void
// }

const
    MyPosts = (props: PostsPropsType) => {

        let mappedPosts = props.posts.map((post, index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>)

        let onAddPost = () => {
            props.addPostHandler()
        }
        let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            props.onPostChange(text)
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