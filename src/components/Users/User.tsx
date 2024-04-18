import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {followingProgressType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {log} from "util";
import {Paginator} from "../common/Paginator/Paginator";


type UserComponentType = {
  user: UserType,
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: number[]
}


const User = (props: UserComponentType) => {

  return (

    <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                 <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}
                                      alt="userAvatar" className={s.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {props.user.followed ?
                              <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.unfollow(props.user.id)
                              }}>UnFollow</button>
                              : < button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.follow(props.user.id)
                              }}>Follow</button>}

                        </div>
                    </span>
      <span>
                        <span>
                            <div> {props.user.name}</div>
                            <div>{props.user.status} </div>
                            </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
    </div>

  );
};

export default User;