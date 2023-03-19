import React from 'react';
import Myposts, {postsDataType} from "./MyPosts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfileProps={
    state: profilePageType
    addPostCallBack : (postMsg: string)=> void
}


export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.state.posts} addPostCallBack={props.addPostCallBack}/>
        </div>
    );
};

