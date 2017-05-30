import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
  render() {
    return(
      <div className='support panel panel-primary message-section'>
        <MessageList {...this.props} />
        <MessageForm {...this.props} />
      </div>
    )
  }
}

MessageSection.propTypes = {
  messages: PropTypes.array.isRequired,
  addNewMessage: PropTypes.func.isRequired
}

export default MessageSection;