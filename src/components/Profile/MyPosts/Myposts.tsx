import React from 'react';
import  s from './Myposts.module.css'
import {Post} from "./Post/Post";


const Myposts = () => {
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add post</button></div>
            </div>
            <div className={s.posts}>
              <Post message={"Yo, I'm God of Death"}
                    likesCount={234}
              />
              <Post message={"Wassup. Have you lost your Death Note? "}
                    likesCount={172}
              />
            </div>
        </div>
    );
};

export default Myposts;