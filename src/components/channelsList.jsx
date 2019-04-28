import React from 'react';
import connect from '../connect';

const mapStateToProps = state => ({
  channels: state.channels,
  currentChannel: state.currentChannelId,
});

@connect(mapStateToProps)
class ChannelsList extends React.Component {
  handleChannelChange = id => () => {
    const { changeChannel } = this.props;
    changeChannel({ id });
  };

  channelsRender = (channels) => {
    if (channels.length === 0) {
      return null;
    }
    const { id, name } = channels;
    return (
      <a
        key={id}
        href={`#${name}`}
        data-toggle="list"
        role="tab"
        className="list-group-item d-flex"
        onClick={this.handleChannelChange(id)}
      >
        {name}
      </a>
    );
  }

  render() {
    const { channels } = this.props;
    // console.log(this.props);

    return (
      <div className="list-group-flush">
        {channels.map(this.channelsRender)}
      </div>
    );
  }
}

export default ChannelsList;
