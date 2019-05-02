import { Modal, Button } from 'react-bootstrap';
import React from 'react';
// import { Field, reduxForm, SubmissionError } from 'redux-form';

import connect from '../../connect';


const mapStateToProps = state => ({
  show: state.modals.deleteChannel.show,
  channelDeleteId: state.modals.deleteChannel.params
    ? state.modals.deleteChannel.params.id : null,
});

@connect(mapStateToProps)
class DeleteChannel extends React.Component {
  handleModalClose = () => {
    const { closeModal } = this.props;
    closeModal('deleteChannel');
  };

  handleSubmit = id => async () => {
    const {
      deleteChannel,
      closeModal,
    } = this.props;

    const data = { params: { id } };
    await deleteChannel(data);
    closeModal('deleteChannel');
  }


  render() {
    const {
      show,
      channelDeleteId,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you want delete this channel?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose} variant="secondary">Close</Button>
            <Button type="submit" variant="primary" onClick={this.handleSubmit(channelDeleteId)}>Yes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DeleteChannel;
