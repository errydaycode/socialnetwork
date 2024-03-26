import {ActionTypes, UserProfileType} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Ты... это...заходи, если что!..', likesCount: 172},
        {id: 2, message: 'Щас спою!', likesCount: 172},
    ] as Array<postsDataType>,

    profile:  {} as UserProfileType,
    status: ''
}

export type InitialProfileReducerStateType =  typeof initialState
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
        default:
            return state
    }

}

export const AddPostAC = (text: string)  => ({type: 'ADD-POST', text}  as const)
export const setUserProfile = (profile: UserProfileType)  => ({type: 'SET-USER-PRFOFLE', profile } as const)


export const setStatusAC = (status: string) => ({type: 'SET-STATUS', status} as const)


export const setUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getUserProfile(userId)
        .then((res) => {
            console.log(res.data)
            dispatch(setUserProfile(res))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then((res) =>  {
            dispatch(setStatusAC(res.data))
        })

}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then((res) =>  {
            if(res.data.resultCode == 0) {
                dispatch(setStatusAC(status))
            }

        })

}

export default ProfileReducer;