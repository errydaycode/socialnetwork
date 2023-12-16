
import {ActionTypes, avatars, FriendsNavType} from "./store";

let initialState =  {
 friends: [
 {id: 1, name: 'Marina', img: avatars},
 {id: 2, name: 'Anna', img: avatars},
 {id: 3, name: 'Liza', img: avatars},
] as FriendsNavType[]
}
export type InitialSidebarReducerStateType =  typeof initialState
 const SidebarReducer = (state: InitialSidebarReducerStateType = initialState, action: ActionTypes): InitialSidebarReducerStateType => {

  return {
   ...state
  }
  }



export default SidebarReducer;