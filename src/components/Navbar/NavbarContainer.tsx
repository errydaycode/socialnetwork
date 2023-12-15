// import React from 'react';
// import s from './Navbar.module.css'
// import {NavLink} from "react-router-dom";
// import {connect} from "react-redux";
// import {AppRootStateType} from "../../redux/redux-store";
// import {Navbar} from "./Navbar";
// import {FriendsNavType} from "../../redux/store";
//
//
// //
// // type NavbarPropsType={
// //     state: NavbarType
// // }
//
//  type mapStateToPropsType ={
//     friends:  FriendsNavType[]
// }
//
//  type mapDispatchToPropsType = {
//
// }
//
// export type NavbarPropsType = mapStateToPropsType
//
//
// let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
//     return {
//         friends: state.navbar.friends
//     }
// }
//
// export const ConnectedNavbar = connect(mapStateToProps, null) (Navbar);
import React from 'react';

import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { Navbar } from "./Navbar";

type FriendsNavType = {
    id: number;
    name: string;
    img: string
};

type mapStateToPropsType = {
    friends: FriendsNavType[];
};

type mapDispatchToPropsType = {
    // Определите свойства для действий, если это необходимо
};

export type NavbarPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        friends: state.navbar.friends
    };
};

const ConnectedNavbar = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppRootStateType>(
    mapStateToProps,
)(Navbar);

export default ConnectedNavbar;