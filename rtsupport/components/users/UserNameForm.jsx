import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class UserNameForm extends Component {

  handleSubmit(e) {
  e.preventDefault();
    console.log(this.props)
    const node = this.refs.userName;
    const newUserName = node.value;
    this.props.addNewUser(newUserName);
    node.value = '';
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='text'
            ref='userName'
            placeholder='Add your username'
          />
        </div>
      </form>
    )
  }
}

UserNameForm.propTypes = {
  addNewUser: PropTypes.func.isRequired
}

export default UserNameForm;