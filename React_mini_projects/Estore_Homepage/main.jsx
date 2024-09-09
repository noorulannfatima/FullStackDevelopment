import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This imports your global CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

// Initial render
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
