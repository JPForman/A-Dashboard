// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// Calling upon components
import App from './App';

// Calling upon service worker for localhost environment
import * as serviceWorker from './serviceWorker';

// HTML Setup (Shell)
{/*******************
<html lang="en">
    <head></head>
    <body></body>
    <noscript></noscript>
    <div id="root">
        // Component App will run within #root
    </div>
</html> 
*/}

ReactDOM.render(
  <HashRouter >
    <App />
  </HashRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();