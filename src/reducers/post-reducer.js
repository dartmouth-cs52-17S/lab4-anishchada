import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        all: action.payload.data,
        post: {},
      };
    case ActionTypes.FETCH_POST:
      return {
        post: action.payload.data,
      };
    default:
      return initialState;
  }
};

export default PostReducer;
