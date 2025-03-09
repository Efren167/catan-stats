import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root')); // Usando createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
