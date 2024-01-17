import {ActionTypes} from "./store";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";


let initialState = {
    posts: [
        {id: 1, message: 'Ты... это...заходи, если что!..', likesCount: 172},
        {id: 2, message: 'Щас спою!', likesCount: 172},
    ] as Array<postsDataType>,
    newPostText: ''
}

export type InitialProfileReducerStateType =  typeof initialState
const ProfileReducer = (state: InitialProfileReducerStateType = initialState, action: ActionTypes): InitialProfileReducerStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postsDataType =
                {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.postMsg
            }
        default:
            return state
    }

}

export const AddPostAC = ()  => {

    return {
        type: 'ADD-POST'
    } as const
}

export const UpdateNewPostTextAC = (postMsg: string) => {
    debugger
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        postMsg
    } as const
}

export default ProfileReducer;