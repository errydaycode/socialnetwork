import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth?: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedicrect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'login'}/>
        return <Component {...restProps as T} />
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent

};

