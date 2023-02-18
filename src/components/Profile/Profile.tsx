import React from 'react';
import  s from './Profile.module.css'
import Myposts from "./MyPosts/Myposts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2021/03/17-03-2021-Wednesday%E2%80%93-React-Banner.png" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <Myposts/>
        </div>
    );
};

