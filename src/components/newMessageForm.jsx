import React from 'react';


export default class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'New message' };
  }

  render() {
    const { text } = this.state;
    return (
      <div className="">
        <p>{text}</p>
      </div>
    );
  }
}
