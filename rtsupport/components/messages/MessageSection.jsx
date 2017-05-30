import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageSection extends Component {
  render() {
    return(
      <div className='support panel panel-primary message-section'>
        Hello, world!
      </div>
    )
  }
}

MessageSection.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageSection;