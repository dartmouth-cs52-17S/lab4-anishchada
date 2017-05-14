import { combineReducers } from 'redux';
import PostReducer from './post-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  Posts: PostReducer,
  auth: AuthReducer,
});

export default rootReducer;
