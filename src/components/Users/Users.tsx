import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPresentationalType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number)=> void
    unFollow: (userId: number) => void
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
                                 <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="userAvatar" className={s.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={()=> {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true})
                                        .then((res) => {
                                            console.log(res.data)
                                            if (res.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })

                                }}>UnFollow</button>
                                : < button onClick={()=> {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true})
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                console.log(res.data)
                                                props.follow(u.id)
                                            }
                                        })
                                    props.follow(u.id)

                                }}>Follow</button> }

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