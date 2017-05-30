import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserNameForm from './UserNameForm.jsx'
import UserNameList from './UserNameList.jsx'


class UserNameSection extends Component {

  render() {
    return(
      <div className='support panel panel-primary nav-section'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
          <UserNameList {...this.props} />
          <UserNameForm {...this.props} />
        </div>
      </div>
    )
  }
}

UserNameSection.propTypes = {
  users: PropTypes.array.isRequired,
  addNewUser: PropTypes.func.isRequired
}


export default UserNameSection;
