import {ActionTypes} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";

export type UserType = {
    id: string
    photoUrl: string
    isFollowed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

let initialState = {
    users: [] as UserType[]
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

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export default usersReducer;