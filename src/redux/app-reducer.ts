import {getAuthUserData} from "./auth-reducer";
import {AppThunkType} from "./redux-store";



type InitialStateType = {
    initialized: boolean
}

let initialState:InitialStateType = {
    initialized:false
}

export const appReducer = (state = initialState ,action:appActionType):InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED_SUCCESS': {
            return {...state,
                initialized: true}
        }
        default:
            return state
    }
}

export type appActionType = | ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type:"SET_INITIALIZED_SUCCESS"} as const)


export const initializedApp = ():AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    // pr2 = dispatch(getUsersTheme)
    // pr3 = dispatch(getUsersLanguage)
    // pr4 = dispatch(getUserSettings)
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess())
    })
}