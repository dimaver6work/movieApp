import React from 'react';
import s from './post.module.css';
import getClass from './getClass';
import { useState } from 'react';
import Modal from './modal.js';

export default ({ post }) => {
  const [modalActive, setModalActive] = useState(false);
  const [text, settext] = useState('');
  return (
    <div
      onClick={event => {
        settext(post.filmId);
        setModalActive(true);
      }}
      className={s.movie}
    >
      <div className={s.movieInner}>
        <img src={post.posterUrl} alt="movie" className={s.movieCover} />
        <div className={s.movieCoverDark}></div>
        <div className={s.movieinfo}>
          <div className={s.movieTitle}>{post.nameRu}</div>
          <div className={s.movieCatagory}>
            {post.genres.map(genre => genre.genre).join(', ')}
          </div>

          <div className={s.movieAvarage + ' ' + getClass(post.rating)}>
            {post.rating}
          </div>
        </div>
      </div>
      {modalActive && (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          settext={settext}
          text={text}
        />
      )}
    </div>
  );
};
