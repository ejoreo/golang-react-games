import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    return(
      <div>
        <ul>
          { this.props.messages.map(msg => {
              <Message 
                key={msg.id}
                message={msg}
                {...this.props}
              />
          })}
        </ul>
      </div>
    )
  }

} 

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;