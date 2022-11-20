import './App.css';
import React from 'react';

import Navbar from './components/navbar/navbar';
import Content from './components/content';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar />

      <Content />
      <Footer />
    </div>
  );
}

export default App;
