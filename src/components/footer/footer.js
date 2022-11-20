import s from './footer.module.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

function Footer() {
  return (
    <div className={s.footer}>
      <NavLink to="/" className={s.pagination}>
        1
      </NavLink>
      <NavLink to="/2" className={s.pagination}>
        2
      </NavLink>
      <NavLink to="/3" className={s.pagination}>
        3
      </NavLink>
      <NavLink to="/4" className={s.pagination}>
        4
      </NavLink>
      <NavLink to="/5" className={s.pagination}>
        5
      </NavLink>
      <NavLink to="/6" className={s.pagination}>
        6
      </NavLink>
    </div>
  );
}

export default Footer;
