import React from 'react';
import ReactDOM from 'react-dom/client';
import UserSearch from './refs/UserSearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return(
      <UserSearch/>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
