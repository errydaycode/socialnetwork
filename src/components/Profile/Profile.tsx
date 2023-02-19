import React from 'react';
import  s from './Profile.module.css'
import Myposts from "./MyPosts/Myposts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts/>
        </div>
    );
};

