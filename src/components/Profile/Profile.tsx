import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {UserProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileProps = {
    profile: UserProfileType

}

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

