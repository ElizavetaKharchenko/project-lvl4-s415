import React from 'react';
import { render } from 'react-dom';
import ChannelsList from './components/channelsList';
import Chat from './components/chat';
import NewMessageForm from './components/newMessageForm';

const App = ({ channels, messages }) => (
  <div className="row h-100">
    <div className="col-3 sidebar mt-3">
      <ChannelsList channels={channels} />
    </div>
    <div className="col-9 mt-3">
      <Chat messages={messages} />
      <NewMessageForm />
    </div>
  </div>
);

export default (state) => {
  render(
    App(state),
    document.getElementById('chat'),
  );
};
