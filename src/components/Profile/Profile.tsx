import React from 'react';
import Myposts, {postsDataType} from "./MyPosts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileProps={
    posts: postsDataType[]
}


export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.posts}/>
        </div>
    );
};

