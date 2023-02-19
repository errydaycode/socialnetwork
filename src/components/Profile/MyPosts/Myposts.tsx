import React from 'react';
import  s from './Myposts.module.css'
import {Post} from "./Post/Post";


const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
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