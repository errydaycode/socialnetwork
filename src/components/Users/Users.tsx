import React from 'react';
import {UsersPageType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


export class Users extends React.Component<UsersPageType, any>{

    constructor(props: UsersPageType) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((res) => {
                    this.props.setUsers(res.data.items)
                })

    }


    render() {
        return  <div>

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="userAvatar" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={()=> this.props.unFollow(u.id)}>UnFollow</button>
                                : < button onClick={()=> this.props.follow(u.id)}>Follow</button> }
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
    }
}

