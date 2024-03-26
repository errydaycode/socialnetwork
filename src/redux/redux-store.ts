import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers( {
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    navbar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
}) // объект воспринимайте не как связка редьюсеров, а как стейт. Сколько веток в стейте - столько и редьюсеров тут.




export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<void, AppRootStateType, unknown, AnyAction>
// автоматически, createStore создает внутри себя стейт, с теми св-вами, что мы указали в рутовом редьюсере

// @ts-ignore
window.store = store