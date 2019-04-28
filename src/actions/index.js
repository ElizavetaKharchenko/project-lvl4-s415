import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessage = data => async (dispatch) => {
  try {
    const url = routes.messages(data.params.channelId);
    await axios.post(url, { data });
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};
