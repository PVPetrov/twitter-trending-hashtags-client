import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';
import configStore from './store/configStore';

const store  = configStore();

render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
