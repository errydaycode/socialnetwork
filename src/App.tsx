import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import { Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ConnectedNavbar from "./components/Navbar/NavbarContainer";
import {Users} from "./components/Users/Users";

//
// type AppPropsType ={
//     state: statePropsType
//     dispatch: (action : ActionTypes) => void
//     store : StoreType
// }

function App() {

    return (

            <div className='app-wrapper'>
                <Header/>
                <ConnectedNavbar />
                <div className={'app-wrapper-content'}>
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                    <Route  path={'/dialogs'} render={()=> <DialogsContainer />}
                    />
                    <Route  path={'/profile'} render={()=> <Profile/>}/>
                    <Route path={'/news'} render={ ()=> <News/>}/>
                    <Route  path={'/music'} render={ ()=>  <Music/>}/>
                    <Route  path={'/settings'} render={()=>  <Settings/>}/>
                    <Route  path={'/users'} render={()=>  <Users/>}/>
                </div>
            </div>

            );
            }


            export default App




