import {ActionTypes, UserProfileType, UserProfileTypePhotos} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


let initialState = {
  posts: [
    {id: 1, message: 'Ты... это...заходи, если что!..', likesCount: 172},
    {id: 2, message: 'Щас спою!', likesCount: 172},
  ] as Array<postsDataType>,

  profile: {} as UserProfileType,
  status: ''
}

export type InitialProfileReducerStateType = typeof initialState
const ProfileReducer = (state: InitialProfileReducerStateType = initialState, action: ActionTypes): InitialProfileReducerStateType => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost: postsDataType =
        {
          id: state.posts.length + 1,
          message: action.text,
          likesCount: 0
        };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
    case "SET-USER-PRFOFLE":
      return {
        ...state,
        profile: action.profile
      }
    case "SET-STATUS" :
      return {
        ...state,
        status: action.status
      }
    case "DELETE-POST":
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    case "SAVE-PHOTO-SUCCESS":
      return {...state, profile: {...state.profile, photos: action.photos}}
    default:
      return state
  }

}

export const addPostAC = (text: string) => ({type: 'ADD-POST', text} as const)
export const deletePost = (id: number) => ({type: 'DELETE-POST', id} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PRFOFLE', profile} as const)
export const savePhotoSuccess = (photos: UserProfileTypePhotos) => ({type: 'SAVE-PHOTO-SUCCESS', photos} as const)


export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)


export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
  const res = await profileApi.getUserProfile(userId)
  dispatch(setUserProfile(res))

}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
  const res = await profileApi.getStatus(userId)
  dispatch(setStatusAC(res.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const res = await profileApi.updateStatus(status)
  if (res.data.resultCode == 0) {
    dispatch(setStatusAC(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
  const res = await profileApi.savePhoto(file)
  if (res.data.resultCode == 0) {
    dispatch(savePhotoSuccess(res.data.data.photos))
  }
}

export default ProfileReducer;