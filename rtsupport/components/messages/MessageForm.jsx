import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    console.log(this.refs.message);
    const node = this.refs.message;
    const newMessage = node.value;
    this.props.addNewMessage(newMessage);
    node.value = '';
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='text'
            ref='message'
            placeholder='Type anything . . . '
          />
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  addNewMessage: PropTypes.func.isRequired
}

export default MessageForm;