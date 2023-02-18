import React from 'react';
import  s from './Profile.module.css'
export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2021/03/17-03-2021-Wednesday%E2%80%93-React-Banner.png" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

