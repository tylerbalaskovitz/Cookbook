import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom/client'
>>>>>>> cd186b8 (Test)
import './index.css';
import App from './App';
import GoodRecipes from './recipes/GoodRecipes.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
