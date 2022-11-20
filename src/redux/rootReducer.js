import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
});
