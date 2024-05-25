import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './clock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
