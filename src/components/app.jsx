import React from 'react';

import ChannelsList from './channelsList';
import Chat from './chat';
import NewMessageForm from './newMessageForm';


const App = ({ userName }) => (
  <div className="row h-100 bg-light border rounded-lg">
    <div className="col-3 sidebar mt-3 h-25">
      <ChannelsList />
    </div>
    <div className="col-9 mt-3 h-100">
      <Chat />
      <NewMessageForm name={userName} />
    </div>
  </div>
);


export default App;
