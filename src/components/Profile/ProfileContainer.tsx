import React, {ReactComponentElement} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfileTC, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {Redirect, RouteComponentProps, useLocation, useParams, withRouter} from "react-router-dom";
import {withAuthRedicrect} from "../../hoc/withAuthRedicrect";
import {compose} from "redux";

// type ProfileProps = {
//     store: StoreType
//
// }

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        //debugger
        let userId = this.props.match.params.userId
        console.log(this.props.match.params)
        if (!userId) {
            userId = '2'
        }
        this.props.setUserProfileTC(userId)
        this.props.getStatus(userId)
    }

    render() {


        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={updateStatus}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC, getStatus, updateStatus}),
    withRouter,
    withAuthRedicrect
)(ProfileContainer)






// let AuthRedirectComponent = withAuthRedicrect(ProfileContainer)

//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {setUserProfileTC})(WithUrlDataContainerComponent)


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean | undefined
    status: string
}
type mapDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType