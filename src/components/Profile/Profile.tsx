import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, profilePageType} from "../../redux/store";

type ProfileProps={
    profilePage: profilePageType
    dispatch: (action: ActionTypes) => void

}


export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

