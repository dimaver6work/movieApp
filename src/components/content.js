import s from './content.module.css';
import React from 'react';
import FetchedPosts from './FetchedPosts';
import { Routes, Route } from 'react-router-dom';
import FetchedPosts2 from './FetchedPosts2';
import FetchedPosts3 from './FetchedPosts3';
import FetchedPosts4 from './FetchedPosts4';
import FetchedPosts5 from './FetchedPosts5';
import FetchedPosts6 from './FetchedPosts6';

function Content() {
  return (
    <div className={s.conteiner}>
      <Routes>
        <Route element={<FetchedPosts />} path="/" />
        <Route element={<FetchedPosts2 />} path="/2" />
        <Route element={<FetchedPosts3 />} path="/3" />
        <Route element={<FetchedPosts4 />} path="/4" />
        <Route element={<FetchedPosts5 />} path="/5" />
        <Route element={<FetchedPosts6 />} path="/6" />
      </Routes>
    </div>
  );
}

export default Content;
