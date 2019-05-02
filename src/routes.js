const host = '/api/v1';

export default ({
  messages: channelId => [host, `channels/${channelId}/messages`].join('/'),
  channels: () => [host, 'channels'].join('/'),
  channel: id => [host, `channels/${id}`].join('/'),
});
