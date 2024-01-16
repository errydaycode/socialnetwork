import {ActionTypes} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";



export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
       small: string,
        large: string
      },
    followed: boolean
    status: string | null

}

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
}

export type InitialUserReducerStateType =  typeof initialState
const usersReducer = (state: InitialUserReducerStateType = initialState, action: ActionTypes): InitialUserReducerStateType => {
    debugger
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, followed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el=> el.id === action.userId ? {...el, followed: false} : el)
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export const followAC = (userId: number)  => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unFollowAC = (userId: number) => {
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