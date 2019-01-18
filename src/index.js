import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { init as logInit } from './utils/log'
import HandleErrors from './components/HandleErrors'
import * as serviceWorker from './serviceWorker';

import './global.css';

logInit();
ReactDOM.render(<HandleErrors><App /></HandleErrors>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
