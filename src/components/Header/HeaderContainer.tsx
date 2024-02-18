import React from 'react';
import  s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, userAuthDataType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

 class HeaderContainer extends React.Component<any, any>{


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0) {
                    console.log(res.data.data)
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
    return <>
        <Header {...this.props}  />
    </>;
}
};

 type authMapStateToProps = {
     isAuth: boolean,
     login: string
 }

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)