import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {postsDataType} from "./components/Profile/MyPosts/MyPosts";
import {addPostCallBack, statePropsType, updateNewPostText} from "./redux/state";


type AppPropsType ={
    state: statePropsType
    addPostCallBack : ()=> void
    updateNewPostText : (postMsg: string)=> void
    updateNewMessageText: (msg: string) => void
    addNewMessage: ()=> void
}


function App(props: AppPropsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className={'app-wrapper-content'}>
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                    <Route  path={'/dialogs'} render={()=> <Dialogs state={props.state.messagesPage}
                                                                    addNewMessage={props.addNewMessage}
                                                                    updateNewMessageText={props.updateNewMessageText}
                                                                    newMessageText={props.state.messagesPage.newMessageText}

                    />}
                    />
                    <Route  path={'/profile'} render={()=> <Profile profilePage={props.state.profilePage}
                                                                    addPostCallBack={props.addPostCallBack}
                                                                    updateNewPostText={props.updateNewPostText}


                    />}/>
                    <Route path={'/news'} render={ ()=> <News/>}/>
                    <Route  path={'/music'} render={ ()=>  <Music/>}/>
                    <Route  path={'/settings'} render={()=>  <Settings/>}/>
                </div>
            </div>

            );
            }


            export default App




