import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './main';
import './styles/tailwind.css';
import './styles/main.css';
import './styles/auth.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
