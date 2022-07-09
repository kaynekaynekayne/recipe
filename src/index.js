import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
// import Recipe from './service/recipe';

// const recipe=new Recipe(process.env.REACT_APP_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
