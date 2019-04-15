import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ messages: state.messages });

@connect(mapStateToProps)
class Chat extends React.Component {
  messagesRender = ({ name, text, id }) => {
    return <li className="list-group-item" />;
  }

  render() {
    const { messages } = this.props;
    if (messages.length === 0) {
      return null;
    }

    return (
      <div className="h-75">
        <p>Messages</p>
        <ul className="list-group-flush pl-0">
          {messages.map(this.messagesRender)}
        </ul>
      </div>
    );
  }
}

export default Chat;
