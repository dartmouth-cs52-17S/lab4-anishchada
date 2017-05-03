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
      cover_url: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
    this.onInputChange3 = this.onInputChange3.bind(this);
    this.onInputChange4 = this.onInputChange4.bind(this);
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

  onInputChange4(event) {
    // console.log(event.target.value);
    this.setState({ cover_url: event.target.value });
    // this.props.onSearchChange(event.target.value);
    // console.log(this.state.searchterm);
  }

  submitForm() {
    console.log('in ');
    this.props.createPost({ title: this.state.title, content: this.state.content, tags: this.state.tags, cover_url: this.state.cover_url }, this.props.history);
  }

  render() {
    return (
      <div>
        <h3>Create Title</h3>
        <div><input onChange={this.onInputChange} value={this.state.title} className="input" /></div>
        <h3>Create Content</h3>
        <div><input onChange={this.onInputChange2} value={this.state.content} className="input" /></div>
        <h3>Create Tags Using Hashtags</h3>
        <div><input onChange={this.onInputChange3} value={this.state.tags} className="input" /></div>
        <h3>Create Cover URL using valid link</h3>
        <div><input onChange={this.onInputChange4} value={this.state.cover_url} className="input" /></div>
        <button onClick={this.submitForm} className="button">Create</button>
      </div>
    );
  }

}
export default withRouter(connect(null, { createPost })(NewPost));
