import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return(
    <div>
      <h1>React BoilerPlate Boois</h1>
     </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
