import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {followingProgressType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {log} from "util";
import {Paginator} from "../common/Paginator/Paginator";

import User from "./User";



type UsersPresentationalType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number)=> void
    unfollow: (userId: number) => void
    followingInProgress: followingProgressType
}

const Users = (props: UsersPresentationalType) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
            />
            {

                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                           unfollow={props.unfollow}
                />)
            }
        </div>
    );
};

export default Users;