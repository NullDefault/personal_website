import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/base.css';
import App from './typescript/app';
import * as serviceWorker from './typescript/tests/serviceWorker';


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
