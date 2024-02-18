export type userAuthDataType = {
    id?: null | number
    login?: null | string
    email?: null | string
    isAuth?: boolean
}

let initialState: userAuthDataType ={
        id: null,
        login: null,
        email: null,
        isAuth: false

}

export type InitialUserReducerStateType =  typeof initialState
const authReducer = (state: InitialUserReducerStateType = initialState, action: ReturnType<typeof setAuthUserData>): InitialUserReducerStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        default:
            return state
    }

}

export const setAuthUserData = (data: userAuthDataType)  => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}

// export const unFollow = (userId: number) => {
//     return {
//         type: 'UNFOLLOW',
//         userId
//     } as const
// }





export default authReducer;