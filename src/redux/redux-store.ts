import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers( {
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    navbar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}) // объект воспринимайте не как связка редьюсеров, а как стейт. Сколько веток в стейте - столько и редьюсеров тут.




export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<void, AppRootStateType, unknown, AnyAction>
// автоматически, createStore создает внутри себя стейт, с теми св-вами, что мы указали в рутовом редьюсере

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
// @ts-ignore
