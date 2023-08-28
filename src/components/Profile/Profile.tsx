import React from 'react';
import MyPosts, {postsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfileProps={
    profilePage: profilePageType
    addPostCallBack : ()=> void
    updateNewPostText: (postMsg: string)=> void

}


export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPostCallBack={props.addPostCallBack}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

