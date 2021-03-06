import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScreensMainBox from './screens/main/box/box';
import * as serviceWorker from './serviceWorker';
import './reset.css';

ReactDOM.render(React.createElement(ScreensMainBox, {key: (() => Math.round(Math.random() * 10000))()}, null), document.getElementById('root'));

// If you want your Home to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
