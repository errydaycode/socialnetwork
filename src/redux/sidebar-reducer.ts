
import {ActionTypes, avatars, NavbarType} from "./store";

let initialState =  {
 friends: [
 {id: 1, name: 'Marina', img: avatars},
 {id: 2, name: 'Anna', img: avatars},
 {id: 3, name: 'Liza', img: avatars},
]}

 const SidebarReducer = (state: NavbarType = initialState, action: ActionTypes) => {

  return state
}


export default SidebarReducer;