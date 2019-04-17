import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import '../assets/application.css';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';
import io from 'socket.io-client';

import App from './components/app';
import reducers from './reducers';
import * as actions from './actions';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const initState = ({ channels, messages, currentChannelId }) => (
  { channels, messages, currentChannelId }
);

const name = faker.name.findName();
cookies.set('name', name, { expires: 7 });

const UserNameContext = React.createContext(name);

const store = createStore(
  reducers,
  { ...initState(gon) },
  compose(
    applyMiddleware(thunk),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    /* eslint-enable */
  ),
);

const socket = io('/');

socket.on('newMessage', (data) => {
  store.dispatch(actions.addMessageSuccess({ message: data }));
});


render(
  <Provider store={store}>
    <UserNameContext.Consumer>
      {value => (<App userName={value} />)}
    </UserNameContext.Consumer>
  </Provider>,
  document.getElementById('chat'),
);
