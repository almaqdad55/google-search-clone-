import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App';
import './global.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <App />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
