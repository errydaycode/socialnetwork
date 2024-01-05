import React from 'react';
import {UsersPageType} from "./UsersContainer";
import s from './users.module.css'

export const Users = (props: UsersPageType) => {

    if(props.users.length === 0) {
        props.setUsers([
            {id: '1', photoUrl: 'https://sun9-63.userapi.com/s/v1/ig2/r1j_72RzYoXIwur8oBmU3c_MiaOTHNOEQc-l-nFmA4s9mBJz4qw5qtY5fNZXuqpyNuwATdEREh24EsjprZSOyFxr.jpg?size=200x200&quality=96&crop=137,41,325,325&ava=1', isFollowed: true, fullName: 'Georgy', status: 'I am front-end dev', location: {city: 'Moscow', country: 'Russia'} },
            {id: '2', photoUrl: 'https://sun9-63.userapi.com/s/v1/ig2/r1j_72RzYoXIwur8oBmU3c_MiaOTHNOEQc-l-nFmA4s9mBJz4qw5qtY5fNZXuqpyNuwATdEREh24EsjprZSOyFxr.jpg?size=200x200&quality=96&crop=137,41,325,325&ava=1', isFollowed: false, fullName: 'Ivan', status: 'I am back-end dev', location: {city: 'Minsk', country: 'Belarus'} },
            {id: '3', photoUrl: 'https://sun9-63.userapi.com/s/v1/ig2/r1j_72RzYoXIwur8oBmU3c_MiaOTHNOEQc-l-nFmA4s9mBJz4qw5qtY5fNZXuqpyNuwATdEREh24EsjprZSOyFxr.jpg?size=200x200&quality=96&crop=137,41,325,325&ava=1', isFollowed: false, fullName: 'Anna', status: 'I am a designer', location: {city: 'Toronto', country: 'Canada'} },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="userAvatar" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.isFollowed ?
                                <button onClick={()=> props.unFollow(u.id)}>UnFollow</button>
                                : < button onClick={()=> props.follow(u.id)}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.fullName}</div>
                            <div>{u.status} </div>
                            </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};
