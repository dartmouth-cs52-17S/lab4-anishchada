import React, { Component } from 'react';
import { connect } from 'react-redux';

// Some of this code was also refactored from previous short assignments and Lab 3 Notes assignment
export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: '',
        content: '',
        tags: '',
        cover_url: '',
      };
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }

  }

  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
