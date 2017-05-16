import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';

// Some of this code was also refactored from previous short assignments and Lab 3 Notes assignment

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
    this.onInputChange3 = this.onInputChange3.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    this.setState({ email: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  onInputChange2(event) {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  onInputChange3(event) {
    // console.log(event.target.value);
    this.setState({ username: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  submitForm() {
    console.log('in ');
    this.props.signupUser({ email: this.state.email, password: this.state.password, username: this.state.username }, this.props.history);
  }

  render() {
    return (
      <div className="inputheaders">
        <h3>Pick Email</h3>
        <div><input onChange={this.onInputChange} value={this.state.email} className="input" type="text" required /></div>
        <h3>Choose Secure Password</h3>
        <div><input onChange={this.onInputChange2} value={this.state.password} className="input" type="text" required /></div>
        <h3>Pick Username</h3>
        <div><input onChange={this.onInputChange3} value={this.state.username} className="input" type="text" required /></div>
        <button onClick={this.submitForm} className="button">Create Account</button>
      </div>
    );
  }

}
export default withRouter(connect(null, { signupUser })(SignUp));
