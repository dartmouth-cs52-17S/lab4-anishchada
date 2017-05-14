import React from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="bloghead">
      <ul>
        <li><NavLink exact to="/" className="nav">Anish Travel Blog</NavLink></li>
        <li><NavLink to="/posts/new" className="nav">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, null)(Nav));
