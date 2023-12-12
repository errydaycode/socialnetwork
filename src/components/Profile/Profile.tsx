import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, profilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type ProfileProps = {
//     store: StoreType
//
// }

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

