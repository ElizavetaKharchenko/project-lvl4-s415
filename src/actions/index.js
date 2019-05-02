import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const changeChannel = createAction('CHANGE_CHANNEL');

export const openModal = createAction('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');

export const addChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const addChannelFailure = createAction('CHANNEL_ADD_FAILURE');

export const deleteChannelSuccess = createAction('CHANNEL_DELETE_SUCCESS');
export const deleteChannelFailure = createAction('CHANNEL_DELETE_FAILURE');

export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILURE');

export const addMessage = data => async (dispatch) => {
  try {
    const url = routes.messages(data.params.channelId);
    await axios.post(url, { data });
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};

export const addChannel = data => async (dispatch) => {
  try {
    const url = routes.channels();
    await axios.post(url, { data });
  } catch (e) {
    dispatch(addChannelFailure());
    throw e;
  }
};

export const deleteChannel = data => async (dispatch) => {
  try {
    const url = routes.channel(data.params.id);
    await axios.delete(url, { data });
  } catch (e) {
    dispatch(addChannelFailure());
    throw e;
  }
};

export const renameChannel = data => async (dispatch) => {
  try {
    const url = routes.channel(data.params.id);
    await axios.patch(url, { data });
  } catch (e) {
    dispatch(addChannelFailure());
    throw e;
  }
};
