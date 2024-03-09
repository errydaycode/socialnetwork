import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

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

    return (
        <div>
            <Profile profile={this.props.profile}/>
        </div>
    );
}}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
   return { profile: state.profilePage.profile }
}


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: UserProfileType
}
type mapDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent)
