import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import { updatePost, deletePost, fetchPost } from '../actions';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.Post.title,
      content: '',
      tags: '',
    };

    console.log('what');

    this.delete = this.delete.bind(this);
    this.changeToggle = this.changeToggle.bind(this);
    this.renderSomeSection = this.renderSomeSection.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  componentWillReceiveProps(newprops) {
    this.setState({ title: newprops.Post.title });
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeContent(event) {
    this.setState({ content: event.target.value });
  }

  delete() {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  updateContent(event) {
    event.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
    console.log('updating post');
    console.log(this.state.title);
    this.props.updatePost(this.props.match.params.postID, { title: this.state.title, content: this.state.content, tags: this.state.tags });
  }

  changeToggle(event) {
    event.preventDefault();
    console.log('I am editing now?');
    this.setState({ isEditing: !this.state.isEditing });
    // this.renderSomeSection();
  }

  renderSomeSection() {
    if (this.state.isEditing) {
      console.log('i am editing now');
      return (
        <div className="body1">
          <div ><a href="" onClick={this.updateContent}><i className="fa fa-check fa-1x" /></a></div>

          <Textarea className="textbox" onChange={this.onChangeTitle}
            style={{ boxSizing: 'border-box', minHeight: '200', minWidth: '200' }}
            minRows={3}
            maxRows={6}
            maxLength="350"
            // defaultValue={this.props.Post.title}
          />

          <Textarea className="textbox" onChange={this.onChangeContent}
            style={{ boxSizing: 'border-box', minHeight: '200', minWidth: '200' }}
            minRows={3}
            maxRows={6}
            maxLength="350"
            defaultValue={this.props.Post.content}
          />
        </div>);
    } else {
      return (
        <div>
          <div className="body3">
            <h1> ID: {this.props.match.params.postID}</h1>
            <h1> Title: {this.props.Post.title} </h1>
            <h2> Content: {this.props.Post.content} </h2>
            <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.Post.content || '') }} />
          </div>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.Post);
    return (
      <div>
        <div className="note-mover flex-item"><a href="" onClick={this.changeToggle}><i className="fa fa-arrows fa-3x" /></a></div>
        <button onClick={this.delete} />
        <div>{this.renderSomeSection()}</div>
      </div>

    );
  }
}

const mapStateToProps = state => (
  {
    Post: state.Posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { updatePost, deletePost, fetchPost })(Post));
