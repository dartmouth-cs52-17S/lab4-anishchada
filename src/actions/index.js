import axios from 'axios';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=anishchada';

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({
        type: 'FETCH_POSTS',
        payload: response,
      });
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
    const fields = post;
    console.log(fields);

    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then((response) => {
      console.log('here');
      console.log(response);
      history.push('/');
      dispatch({
        type: 'CREATE_POST',
        payload: response,
      });
      console.log(response);
    }).catch((error) => {
      console.log('in error');
      console.log(error);
    });
  };
}

export function updatePost(id, post) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      dispatch({
        type: 'CREATE_POST',
        payload: response,
      });
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({
        type: 'FETCH_POST',
        payload: response,
      });
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id, history) {  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    // here is where you would do your asynch axios calls
    // on the completion of which you would dispatch some new action!
    // can now dispatch stuff
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}
