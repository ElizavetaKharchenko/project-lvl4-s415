import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
// import _ from 'lodash';

import * as actions from '../actions';

const mapStateToProps = state => ({
  message: state.messages,
  channelId: state.currentChannelId,
});

const actionCreators = {
  addMessage: actions.addMessage,
};

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit = async ({ text }) => {
    const {
      addMessage,
      reset,
      channelId,
      name,
    } = this.props;

    const data = { attributes: { text, name }, params: { channelId } };
    try {
      await addMessage(data);
    } catch (e) {
      throw new SubmissionError({ _error: e.message });
    }
    reset();
    this.textInput.current.getRenderedComponent().focus();
  }

  render() {
    const {
      handleSubmit, submitting, pristine, error,
    } = this.props;
    return (
      <form className="form-inline h-25" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-3">
          <Field
            name="text"
            required
            disabled={submitting}
            ref={this.textInput}
            forwardRef
            component="input"
            type="text"
            autoFocus={!submitting}
          />
        </div>
        <input type="submit" disabled={pristine || submitting} className="btn btn-primary" value="Send" />
        {error && <div className="ml-3">{error}</div>}
      </form>
    );
  }
}

const ConnectedNewMessageForm = connect(mapStateToProps, actionCreators)(NewMessageForm);
export default reduxForm({
  form: 'newMessage',
})(ConnectedNewMessageForm);
