import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";


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
                    pages.map((p)=> {
                        let spanClassName = props.currentPage === p ? s.selectedPage : s.unSelectedPage
                        return <span className={spanClassName} onClick={ ()=> props.onPageChanged(p)}>{p}.</span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="userAvatar" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={()=> props.unFollow(u.id)}>UnFollow</button>
                                : < button onClick={()=> props.follow(u.id)}>Follow</button> }
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