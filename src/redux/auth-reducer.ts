import {authApi} from "../api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


export type userAuthDataType = {
    id: number | null
    email: null | string
    login: null | string
    isAuth: boolean
}


let initialState: userAuthDataType = {
    id: null,
    email: "1",
    login: "1",
    isAuth: false
}


export type InitialUserReducerStateType =  typeof initialState
const authReducer = (state: InitialUserReducerStateType = initialState, action: ReturnType<typeof setAuthUserData>): InitialUserReducerStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        default:
            return state
    }

}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}



// export const unFollow = (userId: number) => {
//     return {
//         type: 'UNFOLLOW',
//         userId
//     } as const
// }


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.isAuth()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
     // authApi.isAuth()
     //     .then((res) => {
     //         console.log(res.resultCode)
     //         if (res.resultCode === 0) {
     //             let {id, login, email} = res.data
     //             dispatch(setAuthUserData(id, login, email, true))
     //         }
     //     })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {

    let response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutTC = (): AppThunkType => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    } else {

    }
}



export default authReducer;