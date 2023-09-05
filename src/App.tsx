import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, } from "./components/Dialogs/Dialogs";
import { Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionTypes, statePropsType} from "./redux/state";


type AppPropsType ={
    state: statePropsType
    dispatch: (action : ActionTypes) => void
}


function App(props: AppPropsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className={'app-wrapper-content'}>
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                    <Route  path={'/dialogs'} render={()=> <Dialogs state={props.state.messagesPage}
                                                                    dispatch={props.dispatch}
                                                                    newMessageText={props.state.messagesPage.newMessageText}
                    />}
                    />
                    <Route  path={'/profile'} render={()=> <Profile profilePage={props.state.profilePage}
                                                                    dispatch={props.dispatch}
                    />}/>
                    <Route path={'/news'} render={ ()=> <News/>}/>
                    <Route  path={'/music'} render={ ()=>  <Music/>}/>
                    <Route  path={'/settings'} render={()=>  <Settings/>}/>
                </div>
            </div>

            );
            }


            export default App




