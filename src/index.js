import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/**
 * This Component Render The main react component onto the “root” element (which it is marked in the html file). 
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * @author Rasha Alias <rashaziyad000@gmail.com>
 */