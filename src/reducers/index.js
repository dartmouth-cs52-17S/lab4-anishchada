import { combineReducers } from 'redux';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  Posts: PostReducer,
});

export default rootReducer;
