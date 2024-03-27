import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfileTC, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedicrect} from "../../hoc/withAuthRedicrect";
import {compose} from "redux";

// type ProfileProps = {
//     store: StoreType
//
// }

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        if(userId) {
            this.props.setUserProfileTC(userId)
            this.props.getStatus(userId)
        }


    }


    render() {


        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
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
    userId: number | null
}

type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean | undefined
    status: string
    authorizedUserId: number | null
}
type mapDispatchToPropsType = {
    setUserProfileTC: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

// @ts-ignore
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType