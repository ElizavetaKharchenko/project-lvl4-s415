import React from 'react';


export default class Chat extends React.Component {
  messagesRender = (messages) => {
    if (messages.length === 0) {
      return null;
    }
    return <div />;
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="h-75">
        <p>Messages</p>
        {messages.map(this.messagesRender)}
      </div>
    );
  }
}
