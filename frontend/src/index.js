import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// let myComponent =  document.getElementById('id_idea_analysis')
// if (myComponent !== null){
//     ReactDOM.render(<App />,myComponent);
// }
// registerServiceWorker();

// import 'babel-polyfill';
// import 'react-app-polyfill/ie9';
// import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router-dom';

import App from './App';
import { unregister } from 'modules/core/utils/registerServiceWorker';

// // it's required for the IE
// global.Intl = require('intl');
// window.Intl = require('intl');

var myComponent = document.getElementById('root');
if (myComponent !== null) {
    ReactDOM.render(React.createElement(App, null), myComponent);
}
unregister();