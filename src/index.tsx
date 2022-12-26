import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import List from './state/List';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <List />
  </React.StrictMode>
);