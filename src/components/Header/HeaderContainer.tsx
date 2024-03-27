import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<authStatePropsType>{
    render() {
    return <>
        <Header {...this.props}  />
    </>;
}
};

type mapStateToProps = {
    isAuth:boolean,
    login:string | null
}
type mapDispatchToProps = {
    logoutTC:() => void
}

export type authStatePropsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {logoutTC}) (HeaderContainer)