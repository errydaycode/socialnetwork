import {ActionTypes} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";


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

export type followingProgressType = number[]


let initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as followingProgressType
}

export type InitialUserReducerStateType = typeof initialState
const usersReducer = (state: InitialUserReducerStateType = initialState, action: ActionTypes): InitialUserReducerStateType => {

  switch (action.type) {
    case "FOLLOW":
      return {
        ...state, users: updateObjectInArray(state.users,action.userId, "id",{followed: true})
      }
    case "UNFOLLOW":
      debugger
      return{
        ...state, users: updateObjectInArray(state.users,action.userId, "id",{followed: false})
      }
    case "SET-USERS":
      return {
        ...state, users: action.users
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
    case 'SET-TOGGLE-IS-FOLLOWING-PROGRESS' :
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }

}

export const followSuccess = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId
  } as const
}

export const unFollowSuccess = (userId: number) => {
  debugger
  return {
    type: 'UNFOLLOW',
    userId
  } as const
}

export const setUsers = (users: UserType[]) => {
  return {
    type: 'SET-USERS',
    users
  } as const
}
export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const
}

export const setTotalUsersCount = (usersCount: number) => {
  return {
    type: 'SET-USERS-COUNT',
    usersCount
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'SET-TOGGLE-IS-FETCHING',
    isFetching
  } as const
}
export const toggleFollowingProgress = (isFollowing: boolean, userId: number) => {
  return {
    type: 'SET-TOGGLE-IS-FOLLOWING-PROGRESS',
    isFollowing,
    userId
  } as const
}


export const getUsersThunkCreator = (page: number, pageSizeUserPage: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  let data = await usersAPI.getUsers(page, pageSizeUserPage)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}
export type userActionType =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

type apiMethodType = {
  data: {}
  fieldsErrors: []
  messages: []
  resultCode: number
}

export const followUnfollowFlow = async (dispatch:Dispatch, userId:number,apiMethod:(userId:number)=> Promise<apiMethodType>,actionCreator:(userId:number)=> userActionType ) => {
  dispatch(toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {

  followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unFollowSuccess)
}


export default usersReducer;