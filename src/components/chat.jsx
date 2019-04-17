import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ messages: state.messages });

@connect(mapStateToProps)
class Chat extends React.Component {
  messagesRender = ({ text, name }) => (
    <li className="list-group-item">
      {`${name}: `}
      {text}
    </li>
  );

  render() {
    const { messages } = this.props;

    return (
      <div className="h-75 mb-3">
        <p>Messages</p>
        <div className="overflow-auto h-100">
          {messages.length !== 0
          && (
          <ul className="list-group-flush h-100 pl-0">
            {messages.map(this.messagesRender)}
          </ul>
          )
        }
        </div>
      </div>
    );
  }
}

export default Chat;
