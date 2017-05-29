import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ChannelForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='text'
            ref='channel'
            placeholder='Add Channel'
          />
        </div>
      </form>

    )
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm;