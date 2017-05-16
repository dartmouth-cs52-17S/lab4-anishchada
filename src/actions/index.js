import axios from 'axios';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  // DELETE_POST: 'DELETE_POST',
};

// The framework for the code in each of these functions was provided in the assignment description
// I received some help from Tim and Jon Gonzalez on this section of the assignment

// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://lab5-anish.herokuapp.com/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
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

    axios.post(`${ROOT_URL}/posts${API_KEY}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: 'UPDATE_POST',
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
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      history.push('/');
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then((response) => {
      history.push('/');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      console.log('in error');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };

  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
}


export function signupUser({ email, password, username }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password, username }).then((response) => {
      history.push('/');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      console.log('in error');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };

  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
}
