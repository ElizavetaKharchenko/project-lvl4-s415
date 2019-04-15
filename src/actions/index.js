import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessage = data => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    const url = routes.messages(data.params.channelId);
    const response = await axios.post(url, { data });
    dispatch(addMessageSuccess({ message: response.data }));
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};
