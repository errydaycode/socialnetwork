import React from 'react';
import  s from './Myposts.module.css'
import {Post} from "./Post/Post";


export type postsDataType= {
    id: number,
    message: string,
    likesCount: number
}

type PropsType ={
    posts: postsDataType[]
    addPostCallBack : (postMsg: string)=> void
}

const Myposts = (props: PropsType) => {

    let mappedPosts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler =()=> {
            if(newPostElement.current) {
                props.addPostCallBack(newPostElement.current.value)
                newPostElement.current.value = ''
            }

    }

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
               <div> <button onClick={addPostHandler}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {mappedPosts}
            </div>
        </div>
    );
};

export default Myposts;