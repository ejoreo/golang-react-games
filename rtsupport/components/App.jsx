import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserNameSection from './users/UserNameSection.jsx';
import MessageSection from './messages/MessageSection.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      users: [],
      messages: []
    };
  }
 
  addChannel(name) {
    let {channels} = this.state;
    channels.push({
      id: channels.length, 
      name
    });
    this.setState({channels});
    // TODO: send to server
  }

  addNewUser(newUserName) {
    let {users} = this.state;
    users.push({
      id: users.length, 
      userName: newUserName
    });
    this.setState({users});
    //TODO: send to server
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    // TODO: get channels messages
  }
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection  
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserNameSection 
            {...this.state}
            addNewUser={this.addNewUser.bind(this)}
          />
        </div>
        <div className="messages">
          <MessageSection {...this.state}/>
        </div>
      </div>
    )
  }
}

export default App;

