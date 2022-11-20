import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADER,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_LOADER,
  FETCH_POST_SUCCESS,
  CLEAR_FETCH_POST,
} from './types';
const initialState = {
  fetchedPosts: {
    isLoader: false,
    error: null,
    data: [{}],
  },
  fetchedPost: {
    isLoader: false,
    error: null,
    data: null,
  },
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchedPosts: {
          ...state.fetchedPosts,
          isLoader: false,
          error: null,
          data: action.payload,
        },
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        fetchedPosts: {
          ...state.fetchedPosts,
          isLoader: false,
          error: action.payload,
          data: null,
        },
      };
    case FETCH_POSTS_LOADER:
      return {
        ...state,
        fetchedPosts: {
          ...state.fetchedPosts,
          isLoader: true,
        },
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        fetchedPost: {
          ...state.fetchedPost,
          isLoader: false,
          error: null,
          data: action.payload,
        },
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        fetchedPost: {
          ...state.fetchedPost,
          isLoader: false,
          error: action.payload,
          data: null,
        },
      };
    case FETCH_POST_LOADER:
      return {
        ...state,
        fetchedPost: {
          ...state.fetchedPost,
          isLoader: true,
        },
      };
    case CLEAR_FETCH_POST:
      return {
        ...state,
        fetchedPost: {
          isLoader: false,
          error: null,
          data: null,
        },
      };
    default:
      return state;
  }
};
