import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ConnectedNavbar from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

//
// type AppPropsType ={
//     state: statePropsType
//     dispatch: (action : ActionTypes) => void
//     store : StoreType
// }

class App extends React.Component<AppPropsType>{

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        if(!this.props.initialized){
            return <Preloader/>
        }

        return <div className='app-wrapper'>
                    <HeaderContainer/>
                    <ConnectedNavbar/>
                    <div className={'app-wrapper-content'}>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </div>
    }
}

type mapStateToProps = {
    initialized: boolean
}
type mapDispatchToProps = {
    initializedApp: () => void
}

export type AppPropsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializedApp}))(App);




