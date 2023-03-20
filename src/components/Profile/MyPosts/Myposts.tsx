import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";


export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: postsDataType[]
    addPostCallBack: () => void
    newPostText: string
    updateNewPostText: (postMsg: string) => void
}

const Myposts = (props: MyPostsPropsType) => {

    let mappedPosts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


    let addPostHandler = () => {
        props.addPostCallBack()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {mappedPosts}
            </div>
        </div>
    );
};

export default Myposts;