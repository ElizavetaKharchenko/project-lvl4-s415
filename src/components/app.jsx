import React from 'react';

import ChannelsList from './channelsList';
import Chat from './chat';
import NewMessageForm from './newMessageForm';


const App = () => (
  <div className="row h-100">
    <div className="col-3 sidebar mt-3">
      <ChannelsList />
    </div>
    <div className="col-9 mt-3">
      <Chat />
      <NewMessageForm />
    </div>
  </div>
);

export default App;
