// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions';

const messages = handleActions({
  [actions.addMessageSuccess]:
    (state, { payload: { message } }) => ([...state, message]),
  /* (state, { payload }) => {
      console.log(payload);
      return ([...state, payload]);
    }, */
}, {});

const channels = (state = {}) => state;

const currentChannelId = (state = {}) => state;

export default combineReducers({
  messages,
  channels,
  currentChannelId,
  form: formReducer,
});
