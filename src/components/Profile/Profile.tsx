import React from 'react';
import Myposts, {postsDataType} from "./MyPosts/Myposts";
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
            <Myposts posts={props.profilePage.posts}
                     addPostCallBack={props.addPostCallBack}
                    newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

