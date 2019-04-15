import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import '../assets/application.css';
import gon from 'gon';

import App from './components/app';
import reducers from './reducers';

// import faker from 'faker';

// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const initState = ({ channels, messages, currentChannelId }) => (
  { channels, messages, currentChannelId }
);

const store = createStore(
  reducers,
  { ...initState(gon) },
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);
