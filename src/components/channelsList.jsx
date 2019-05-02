import React from 'react';
import connect from '../connect';

const mapStateToProps = (state) => {
  return ({
    channels: state.channels,
    currentChannel: state.currentChannelId,
  });
};

@connect(mapStateToProps)
class ChannelsList extends React.Component {
  handleChannelChange = id => () => {
    const { changeChannel } = this.props;
    changeChannel({ id });
  };

  handleOpenModal = (modalName, obj) => () => {
    const { openModal } = this.props;
    const data = { modalName, params: obj };
    openModal(data);
  }

  channelsRender = (channels) => {
    if (channels.length === 0) {
      return null;
    }
    const { id, name, removable } = channels;
    return (
      <li className="list-group-item d-flex w-100 justify-content-between" key={id}>
        <div className="">
          <a
            href={`#${name}`}
            data-toggle="list"
            role="tab"
            className="text-capitalize"
            onClick={this.handleChannelChange(id)}
          >
            {name}
          </a>
        </div>
        {removable
          && (
            <div className="">
              <button type="button" className="btn btn-outline-info btn-sm mr-1" onClick={this.handleOpenModal('renameChannel', { params: { id, name } })}><i className="fas fa-pencil-alt" /></button>
              <button type="button" className="btn btn-outline-info btn-sm" onClick={this.handleOpenModal('deleteChannel', { params: { id } })}><i className="far fa-trash-alt" /></button>
            </div>
          )}
      </li>
    );
  }

  render() {
    const { channels } = this.props;

    return (
      <div className="container">
        <div className="row mr-1">
          <p className="col-9">Channels</p>
          <button type="button" className="btn btn-primary btn-sm col-3 h-75" onClick={this.handleOpenModal('addChannel')}>Add</button>
        </div>
        <div className="list-group-flush">
          {channels.map(this.channelsRender)}
        </div>
      </div>
    );
  }
}

export default ChannelsList;
