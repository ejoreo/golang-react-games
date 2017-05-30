import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserNameForm from './UserNameForm.jsx'


class UserSection extends Component {

  render() {
    return(
      <div className='support panel panel-primary nav-section'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
          <UserNameForm />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired
}


export default UserSection;
