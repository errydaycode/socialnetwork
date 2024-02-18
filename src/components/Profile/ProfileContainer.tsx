import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
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
        console.log(userId)
        if (userId === null || userId === undefined) {
            userId = '2'
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then((res) => {
               //console.log(res.data)
                this.props.setUserProfile(res.data)
            })
    }
    render() {
    debugger
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
    setUserProfile: (profile: UserProfileType) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
