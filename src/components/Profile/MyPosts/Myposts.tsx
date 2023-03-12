import React from 'react';
import  s from './Myposts.module.css'
import {Post} from "./Post/Post";


type postsDataType= {
    id: number,
    message: string,
    likesCount: number
}

const Myposts = () => {

    let posts: postsDataType[] = [
        {id: 1, message: '"Yo, I\'m God of Death"', likesCount: 172},
        {id: 2, message: 'Wassup. Have you lost your Death Note?', likesCount: 172},
    ]

    let mappedPosts = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add post</button></div>
            </div>
            <div className={s.posts}>
                {mappedPosts}
            </div>
        </div>
    );
};

export default Myposts;