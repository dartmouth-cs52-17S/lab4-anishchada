import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Post from '../containers/posts';
import { fetchPost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    console.log('what');
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    console.log(this.props.Post);
    return (
      <div>
        <h1> ID: {this.props.match.params.postID}</h1>
        <h1> Title: {this.props.Post.title} </h1>
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    Post: state.Posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
