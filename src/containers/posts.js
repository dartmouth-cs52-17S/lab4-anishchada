import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import Post from '../containers/posts';
import { fetchPosts, fetchPost } from '../actions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newID: 3,
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log(this.props.PostsList);
    return this.props.PostsList.map((post) => {
      return (<div><Link to={`/posts/${post.id}`}>{post.title}</Link></div>);
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    PostsList: state.Posts.all,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPosts, fetchPost })(Posts));
