import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import HomeContainer from './containers';
import './static/styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <HomeContainer />
  </BrowserRouter>,
  document.getElementById('root')
);
