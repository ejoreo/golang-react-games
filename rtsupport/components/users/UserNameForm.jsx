import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class UserNameForm extends Component {

  handleSubmit(e) {
  e.preventDefault();
    const node = this.refs.user;
    const userName = node.value;
    this.props.addUser(userName);
    node.value = '';
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='text'
            ref='user'
            placeholder='Add your username'
          />
        </div>
      </form>
    )
  }
}

UserNameForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default UserNameForm;