// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions';

const messages = handleActions({
  [actions.addMessageSuccess]:
    (state, { payload: { message } }) => ([...state, message]),
  [actions.deleteChannelSuccess]:
    (state, { payload }) => (state.filter(({ channelId }) => channelId !== payload.channelId)),
}, {});

const channels = handleActions({
  [actions.addChannelSuccess]:
    (state, { payload: { name } }) => ([...state, name]),
  [actions.deleteChannelSuccess]:
    (state, { payload: { channelId } }) => (state.filter(({ id }) => channelId !== id)),
}, {});

const currentChannelId = handleActions({
  [actions.changeChannel]: (state, { payload: { id } }) => id,
}, 1);

const modals = handleActions({
  [actions.openModal]:
    (state, { payload: { modalName, params } }) => ({
      ...state,
      [modalName]: { show: true, ...params },
    }),
  [actions.closeModal]:
    (state, { payload }) => ({ ...state, [payload]: { show: false } }),
}, {
  addChannel: { show: false },
  renameChannel: { show: false },
  deleteChannel: { show: false },
});

export default combineReducers({
  messages,
  channels,
  currentChannelId,
  modals,
  form: formReducer,
});
