import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
    this.onInputChange3 = this.onInputChange3.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
  }

  onInputChange(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    this.setState({ title: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  onInputChange2(event) {
    // console.log(event.target.value);
    this.setState({ content: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  onInputChange3(event) {
    // console.log(event.target.value);
    this.setState({ tags: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  submitForm() {
    console.log('in ');
    this.props.createPost({ title: this.state.title, content: this.state.content, tags: this.state.tags }, this.props.history);
  }

  render() {
    return (
      <div id="inputbar">
        <div><input onChange={this.onInputChange} value={this.state.title} id="input" /></div>
        <div><input onChange={this.onInputChange2} value={this.state.content} id="input2" /></div>
        <div><input onChange={this.onInputChange3} value={this.state.tags} id="input3" /></div>
        <button onClick={this.submitForm} />
      </div>
    );
  }

}
export default withRouter(connect(null, { createPost })(NewPost));
