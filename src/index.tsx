import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {
    addPostCallBack,
    updateNewPostText,
    updateNewMessageText,
    addNewMessage,
    state,
    subscribe
} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



const rerenderEntireTree =()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPostCallBack={addPostCallBack}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
                 addNewMessage={addNewMessage}

            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree)