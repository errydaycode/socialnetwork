import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPostCallBack} from "./redux/state";




ReactDOM.render(
    <App state={state} addPostCallBack={addPostCallBack}/>,
  document.getElementById('root')
);