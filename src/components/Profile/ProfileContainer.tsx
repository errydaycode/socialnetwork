import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

// type ProfileProps = {
//     store: StoreType
//
// }

  class ProfileContainer extends React.Component<CommonPropsType>{

    componentDidMount() {
        //debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
       this.props.setUserProfileTC(userId)
    }
    render() {

        if (!this.props.isAuth) return <Redirect to={'login'}/>

    return (
        <div>
            <Profile profile={this.props.profile}/>
        </div>
    );
}}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
   return { profile: state.profilePage.profile, isAuth: state.auth.isAuth }
}


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean | undefined
}
type mapDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent)
