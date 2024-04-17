import profileReducer, {addPostAC, deletePost} from "./profile-reducer";
import {postsDataType} from "../components/Profile/MyPosts/MyPosts";
import {UserProfileType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Ты... это...заходи, если что!..', likesCount: 172},
        {id: 2, message: 'Щас спою!', likesCount: 172},
    ] as Array<postsDataType>,

    profile:  {} as UserProfileType,
    status: ''
}

it('length of posts should be incremented', ()=> {

    let action = addPostAC('new post')
    let endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(3)

})

it('correct post message should be correct', ()=> {

    let action = addPostAC('new post')
    let endState = profileReducer(initialState, action)

    expect(endState.posts[0].message).toBe('new post')
})

it('length of posts should be decremented after delete post action called', ()=> {

    let action = deletePost(1)
    let endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(1)

})

it('length of posts should not be changed while user passed incorrect id', ()=> {

    let action = deletePost(10000)
    let endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(2)

})