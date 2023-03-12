import React from 'react';
import  s from './Myposts.module.css'
import {Post} from "./Post/Post";


type postsDataType= {
    id: number,
    message: string,
    likesCount: number
}

const Myposts = () => {

    let postsData: postsDataType[] = [
        {id: 1, message: '"Yo, I\'m God of Death"', likesCount: 172},
        {id: 2, message: 'Wassup. Have you lost your Death Note?', likesCount: 172},

    ]

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add post</button></div>
            </div>
            <div className={s.posts}>
              <Post message={postsData[0].message}
                    likesCount={postsData[0].likesCount}
              />
                <Post message={postsData[1].message}
                      likesCount={postsData[1].likesCount}
                />
            </div>
        </div>
    );
};

export default Myposts;