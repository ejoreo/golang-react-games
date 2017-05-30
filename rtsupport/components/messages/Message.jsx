import React, {Component} from 'react';
import PropTypes from 'prop-types';
 
class Message extends Component {
    
    render() {
        const message = this.props.message;
        return (
            <li className='message'>
                <div>
                    <strong className='message author'>{message.author}: </strong>
                    <span className='message text'>{message.text}</span>
                    <span className='message time'>{message.time}</span> 
                    <span className='message date'>{message.date}</span>
                </div>
            </li>
        );
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
} 


export default Message;