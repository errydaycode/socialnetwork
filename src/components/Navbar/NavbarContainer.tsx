import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Navbar} from "./Navbar";


//
// type NavbarPropsType={
//     state: NavbarType
// }




const mapStateToProps = (state: AppRootStateType) => {
    return {
        friends: state.navbar
    }
}

export const ConnectedNavbar = connect (mapStateToProps, null)(Navbar)
