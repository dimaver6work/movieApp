import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADER,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_LOADER,
  FETCH_POST_SUCCESS,
  CLEAR_FETCH_POST,
} from './types';

export function fetchedPosts(page) {
  if (Number.isInteger(page)) {
    let general =
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=';
    return async dispatch => {
      dispatch({ type: FETCH_POSTS_LOADER });

      const response = await fetch(`${general}${page}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '300361b4-ba1b-4c3c-a9a4-a3b649d621e7',
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const json = await response.json();
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: json });
      }
      if (!response) {
        dispatch({ type: FETCH_POSTS_ERROR, payload: 'error' });
      }
    };
  } else {
    let search =
      'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
    return async dispatch => {
      dispatch({ type: FETCH_POSTS_LOADER });

      const response = await fetch(`${search}${page}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '300361b4-ba1b-4c3c-a9a4-a3b649d621e7',
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const json = await response.json();
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: json });
      }
      if (!response) {
        dispatch({ type: FETCH_POSTS_ERROR, payload: 'error' });
      }
    };
  }
}

export function fetchedPost(filmId) {
  let apiId = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
  return async dispatch => {
    dispatch({ type: FETCH_POST_LOADER });
    const response = await fetch(`${apiId}/${filmId}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'd07f1ddf-46d9-4c8b-9b49-b91f3a629acf',
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      const json = await response.json();
      dispatch({ type: FETCH_POST_SUCCESS, payload: json });
    }
    if (!response) {
      dispatch({ type: FETCH_POST_ERROR, payload: 'error' });
    }
  };
}

export const clearPost = () => dispatch =>
  dispatch({
    type: CLEAR_FETCH_POST,
  });
