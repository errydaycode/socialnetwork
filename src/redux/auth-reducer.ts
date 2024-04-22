import {authApi, securityApi} from "api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


export type userAuthDataType = {
    id: number | null
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: string
}


let initialState: userAuthDataType = {
    id: null,
    email: "1",
    login: "1",
    isAuth: false,
    captchaUrl: ''
}
type authActions = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>


export type InitialUserReducerStateType =  typeof initialState
const authReducer = (state: InitialUserReducerStateType = initialState, action: authActions): InitialUserReducerStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {...state, ...action.payload}
        case "AUTH/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state, captchaUrl: action.payload.captchaUrl
            }
        default:
            return state
    }

}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "AUTH/SET-USER-DATA",
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: "AUTH/GET-CAPTCHA-URL-SUCCESS",
        payload: {
            captchaUrl
        }
    }as const
}


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authApi.isAuth()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string ): AppThunkType => async (dispatch) => {

    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

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

export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    let response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}





export default authReducer;