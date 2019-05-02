import { Modal, Button, Form } from 'react-bootstrap';
import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import connect from '../../connect';

const mapStateToProps = state => ({
  show: state.modals.addChannel.show,
});


@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })
class AddNewChannel extends React.Component {
  handleModalClose = () => {
    const { closeModal } = this.props;
    closeModal('addChannel');
  };

  handleSubmit = async ({ name }) => {
    const {
      addChannel,
      reset,
      closeModal,
    } = this.props;

    const data = { attributes: { name } };
    try {
      await addChannel(data);
    } catch (e) {
      throw new SubmissionError({ _error: e.message });
    }
    reset();
    closeModal('addChannel');
  }


  render() {
    const {
      handleSubmit, submitting, pristine, error, show,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please, enter channel name</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(this.handleSubmit)}>
            <Modal.Body>
              <Field
                name="name"
                required
                disabled={submitting}
                component="input"
                type="text"
                autoFocus={!submitting}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleModalClose} variant="secondary">Close</Button>
              <Button type="submit" disabled={pristine || submitting} variant="primary">Save changes</Button>
            </Modal.Footer>
            {error && <div className="ml-3">{error}</div>}
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddNewChannel;
