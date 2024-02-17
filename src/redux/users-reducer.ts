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
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type InitialUserReducerStateType =  typeof initialState
const usersReducer = (state: InitialUserReducerStateType = initialState, action: ActionTypes): InitialUserReducerStateType => {

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
                ...state, users:  action.users
            }
        case 'SET-CURRENT-PAGE' :
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-USERS-COUNT' :
            return {
                ...state, totalUsersCount: action.usersCount
            }
        case 'SET-TOGGLE-IS-FETCHING' :
            return {...state, isFetching: action.isFetching}
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: 'SET-USERS-COUNT',
        usersCount
    } as const
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-TOGGLE-IS-FETCHING',
        isFetching
    } as const
}



export default usersReducer;