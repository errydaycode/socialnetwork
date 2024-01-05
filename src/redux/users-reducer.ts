import {ActionTypes} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";

type UsersType = {
    id: string
    isFollowed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

let initialState = {
    users: [
        // {id: '1', isFollowed: true, fullName: 'Georgy', status: 'I am front-end dev', location: {city: 'Moscow', country: 'Russia'} },
        // {id: '2',  isFollowed: false, fullName: 'Ivan', status: 'I am back-end dev', location: {city: 'Minsk', country: 'Belarus'} },
        // {id: '3', isFollowed: false, fullName: 'Dimych', status: 'I am a boss', location: {city: 'Batumi', country: 'Georgia'} },
    ] as UsersType[]
}

export type InitialUserReducerStateType =  typeof initialState
const usersReducer = (state: InitialUserReducerStateType = initialState, action: ActionTypes): InitialUserReducerStateType => {
    debugger
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, isFollowed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, isFollowed: false} : el)
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export const followAC = (userId: string)  => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export default usersReducer;