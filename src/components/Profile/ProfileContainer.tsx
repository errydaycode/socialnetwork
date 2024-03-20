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
        //debugger
        let userId = this.props.match.params.userId
        console.log(this.props.match.params) // почему тут undefined
        if (!userId) {
            userId = '29932'
            // почему когда я руками ввожу id пользователя в урл, мне ничего не показывается, а в урле появляется вместо id login
            // и когда это происходит, мой статус так же сбрасывается
        }
        this.props.setUserProfileTC(userId)
        this.props.getStatus(userId)
        // this.props.updateStatus('3333')
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