import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

// This code was based on code from the Redux short assignment for the increment and decrement counter

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        authenticated: true,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        authenticated: false,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
