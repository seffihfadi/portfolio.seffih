import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <App />{/*<React.StrictMode>*/}
  </Router>
);
