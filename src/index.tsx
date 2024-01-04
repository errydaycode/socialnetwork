import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// Первая отрисовка

// store.subscribe(rerenderEntireTree) // это по сути для того, чтобы при изменении стейта в функциях мы могли делать перерисовку, но тк мы не можем импортировать в стейт что-то из индекса, передаем туда нашу функцию параметром в другой функции ( колл-бэком)


// внедрять будем объект store


// bind - забайндить, привязать, связываем метод с владельцем этого метода, чтобы метод вызывался в контексте своего владельца ( стора)
// отдавая свой метод кому-то колл-бэком, мы его биндим, чтобы владелец метода сохранился и вызывался метод в контексте своего создателя
// bind не вызывает ф-ию , он байндит её с контекстом, в котором мы хотим чтобы он вызывался, но он не вызывает нашу функцию, а возвращает такую же, равнозначную,  но внутри this всегда будет тем контекстом, который мы закинули в него