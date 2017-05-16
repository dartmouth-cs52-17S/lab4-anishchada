import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signoutUser } from '../actions';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newID: 3,
    };
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.signoutUser(this.props.history);
  }

  render() {
    console.log(this.props.authenticated);
    if (this.props.authenticated) {
      return (
        <nav className="bloghead">
          <ul>
            <li><NavLink exact to="/" className="nav">Anish Travel Blog</NavLink></li>
            <li><NavLink to="/posts/new" className="nav">New Post</NavLink></li>
            <li><NavLink to="/signout" className="nav">Sign Out</NavLink></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="bloghead">
          <ul>
            <li><NavLink exact to="/" className="nav">Anish Travel Blog</NavLink></li>
            <li><NavLink to="/posts/new" className="nav">New Post</NavLink></li>
            <li><NavLink to="/signup" className="nav">Sign Up</NavLink></li>
            <li><NavLink to="/signin" className="nav">Sign In</NavLink></li>
          </ul>
        </nav>
      );
    }
  }
}

// const Nav = (props) => {
//   return (
//     <nav className="bloghead">
//       <ul>
//         <li><NavLink exact to="/" className="nav">Anish Travel Blog</NavLink></li>
//         <li><NavLink to="/posts/new" className="nav">New Post</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(Nav));
