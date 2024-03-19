import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {UserProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileProps = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void

}

export const Profile = (props: ProfileProps) => {
    //console.log(props)
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};

