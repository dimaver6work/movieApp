import Post from './Post';
import s from './content.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedPosts } from '../redux/actions';
import { useEffect } from 'react';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  useEffect(() => {
    dispatch(fetchedPosts(2));
  }, []);

  if (posts.error) {
    return <div>Ошибка</div>;
  } else if (posts.data.films !== undefined) {
    return (
      <div className={s.movies}>
        {posts.data.films.map(post => (
          <Post post={post} key={post.filmId} />
        ))}
      </div>
    );
  } else {
    return <div>Загрузка...</div>;
  }
};
