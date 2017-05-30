import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserName extends Component {

  onClick(e) {
    e.preventDefault();
    console.log("I been clicked!");
  };

  render () {
    const user = this.props.user
    const userName = user.userName;
    return (
      <li>
        <a 
          onClick={this.onClick.bind(this)}>
          {userName}
        </a>
      </li>
    )
  }
}

UserName.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserName;