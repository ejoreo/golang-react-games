import React, {Component} from 'react';
import PropTypes from 'prop-types';


class UserSection extends Component {

  render() {
    return(
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
        </div>
      </div>
    )
  }
}


export default UserSection;
