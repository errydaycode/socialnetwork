import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostCallBack, statePropsType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export const rerenderEntireTree =(state: statePropsType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallBack={addPostCallBack}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}



