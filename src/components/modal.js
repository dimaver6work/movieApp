import './modal.css';
import React from 'react';
import { useEffect } from 'react';
import { fetchedPost, clearPost } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ modalActive, setModalActive, settext, text }) => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.posts.fetchedPost)?.data;
  useEffect(() => {
    dispatch(fetchedPost(text));
  }, []);
  return (
    <div className={modalActive ? 'modal active' : 'modal'}>
      {modal?.genres && (
        <div className="contentModal" onClick={e => e.stopPropagation()}>
          <img src={modal.posterUrl} alt={modal.nameRu} className="modalBack" />
          <h1 className="modalTitle">{modal.nameRu}</h1>
          <ul className="modalInfo">
            {modal.filmLength ? (
              <li>Длительность: {modal.filmLength} мин</li>
            ) : (
              ' '
            )}
            <li>Год: {modal.year} </li>
            <li>
              Страна:{' '}
              {modal.countries.map(country => country.country).join(', ')}
            </li>

            <li>Жанр: {modal.genres.map(genre => genre.genre).join(', ')}</li>
            <li>
              Сайт: <a href={modal.webUrl}>{modal.webUrl}</a>{' '}
            </li>
          </ul>
          <span className="description">{modal.description}</span>
          <button
            onClick={() => {
              setModalActive(false);
              dispatch(clearPost());
            }}
            className="closeButton"
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
