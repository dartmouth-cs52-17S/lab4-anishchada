import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import Post from '../containers/posts';
import { fetchPosts, fetchPost } from '../actions';

// I received help from Tim during office hours for this section of the lab; some of the code was refactored from Lab 3

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
      return (
        <div className="mainpost">
          <div id="text">
            <Link to={`/posts/${post.id}`} className="heading">{post.title} </Link>
            <div id="tags">{post.tags}</div>
          </div>
          <img src={post.cover_url} alt="Nothing to display" height="220" width="350" id="cover" />
        </div>);
    });
  }

  render() {
    return (
      <div>
        <div className="mainpost2">{this.renderPosts()}</div>
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
