import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any>{


    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer)