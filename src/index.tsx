import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/state";

const rerenderEntireTree =( )=> {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPostCallBack={store.addPostCallBack.bind(store)}
                 addNewMessage={store.addNewMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree() // Первая отрисовка
store.subscribe(rerenderEntireTree) // это по сути для того, чтобы при изменении стейта в функциях мы могли делать перерисовку, но тк мы не можем импортировать в стейт что-то из индекса, передаем туда нашу функцию параметром в другой функции ( колл-бэком)


// внедрять будем объект store