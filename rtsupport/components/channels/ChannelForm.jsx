import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ChannelForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log("i been submitted!");
    const node = this.refs.channel;
    const channelName = node.value;
    console.log(channelName);
    this.props.addChannel(channelName);
    node.value = '';
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type='text'
          ref='channel'
        />
      </form>

    )
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm;