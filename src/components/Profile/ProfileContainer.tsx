import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
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
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC}),
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
}
type mapDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void
}
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType