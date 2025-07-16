import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// LEVEL2
import { ThemeProvider } from "./context/ThemeContext";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
