
import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";


let rootReducer = combineReducers( {
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    navbar: SidebarReducer
}) // объект воспринимайте не как связка редьюсеров, а как стейт. Сколько веток в стейте - столько и редьюсеров тут.

export const store = createStore(rootReducer)

// автоматически, createStore создает внутри себя стейт, с теми св-вами, что мы указали в рутовом редьюсере

