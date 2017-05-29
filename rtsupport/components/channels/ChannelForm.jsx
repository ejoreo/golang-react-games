import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {

  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    console.log(channelName)
    this.props.addChannel(channelName);
    node.value = ''
  }


  render() {
    return(
      <form>
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