// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions';

const messages = handleActions({
  [actions.addMessageSuccess]:
    (state, { payload: { message } }) => ([...state, message]),
}, {});

const channels = (state = {}) => state;

const currentChannelId = handleActions({
  [actions.changeChannel]: (state, { payload: { id } }) => id,
}, 1);

export default combineReducers({
  messages,
  channels,
  currentChannelId,
  form: formReducer,
});
