import {ActionTypes, profilePageType} from "./state";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";


const ProfileReducer = (state: profilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postsDataType =
                {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                };
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.postMsg
            return state;
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
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        postMsg
    } as const
}

export default ProfileReducer;