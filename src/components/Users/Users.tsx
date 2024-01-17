import React from 'react';
import {UsersPageType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import {logDOM} from "@testing-library/react";


export class Users extends React.Component<UsersPageType, any>{
    


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            })

    }

    render() {

        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }





        return  <div>

            <div>
                {
                    pages.map((p)=> {
                        let spanClassName = this.props.currentPage === p ? s.selectedPage : s.unSelectedPage
                    return <span className={spanClassName} onClick={ ()=> this.onPageChanged(p)}>{p}.</span>
                    })
                }
            </div>

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

