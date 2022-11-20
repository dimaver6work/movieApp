import s from './title.module.css';
import React from 'react';

function Title() {
  return (
    <div>
      <a id={s.title} href="/">
        MOVIE APP
      </a>
    </div>
  );
}

export default Title;
