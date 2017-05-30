import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserName from './UserName.jsx';

class UserNameList extends Component {

  render() {
    return(
      <ul>
        {this.props.users.map(user => {
          console.log(user.userName)
          return( 
            <UserName
              user={user}
              key={user.id}
              {...this.props}
            />
          )
        })
        }
      </ul>
    )
  }
}

UserNameList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserNameList;