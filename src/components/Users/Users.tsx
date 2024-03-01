import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {followingProgressType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";



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

    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map((p, index)=> {
                        debugger
                        let spanClassName = props.currentPage === p ? s.selectedPage : s.unSelectedPage
                        return <span key={index} className={spanClassName} onClick={ ()=> props.onPageChanged(p)}>{p}.</span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                 <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                      alt="userAvatar" className={s.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {props.unfollow( u.id)}}>UnFollow</button>
                                : < button  disabled={props.followingInProgress.some(id => id === u.id)}  onClick={()=> {props.follow(u.id)}}>Follow</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name}</div>
                            <div>{u.status} </div>
                            </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;