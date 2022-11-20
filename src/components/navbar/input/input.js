import s from './input.module.css';
import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchedPosts } from '../../../redux/actions';

function Input() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <input
        onChange={event => setValue(event.target.value)}
        value={value}
        type="text"
        placeholder="Find your movie"
      />
      <button className={s.button} onClick={dispatch(fetchedPosts(value))}>
        Search
      </button>
    </div>
  );
}

export default Input;
