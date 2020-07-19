import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import AppState from './context/AppState';
ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
  document.getElementById('root')
);
