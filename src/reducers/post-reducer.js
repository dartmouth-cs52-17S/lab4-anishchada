import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

// This code was based on code from the Redux short assignment for the increment and decrement counter

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        all: action.payload.data,
        post: {},
      };
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state,
        { post: action.payload.data },
      );
    case ActionTypes.UPDATE_POST:
      return Object.assign({}, state,
        { post: action.payload.data },
      );
    default:
      return state;
  }
};

export default PostReducer;
