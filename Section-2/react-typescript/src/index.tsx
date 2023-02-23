import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return(
    <div>
      <h1>React BoilerPlate Boois</h1>
      <h3>Space</h3>
      < Parent />
     </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
