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


const rerenderEntireTree =( )=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPostCallBack={addPostCallBack}
                 addNewMessage={addNewMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree() // Первая отрисовка

subscribe(rerenderEntireTree) // это по сути для того, чтобы при изменении стейта в функциях мы могли делать перерисовку, но тк мы не можем импортировать в стейт что-то из индекса, передаем туда нашу функцию параметром в другой функции ( колл-бэком)


// внедрять будем объект store