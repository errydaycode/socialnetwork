import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ConnectedNavbar, Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import { Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionTypes, statePropsType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                </div>
            </div>

            );
            }


            export default App




