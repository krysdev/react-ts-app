import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import List from './state/List';
// import EventComponent from './events/EventComponent';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <List /> */}
    {/* <EventComponent/> */}
    <UserSearch/>
  </React.StrictMode>
);