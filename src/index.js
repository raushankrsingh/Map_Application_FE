import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = 'https://map-application-backend.onrender.com/api'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
