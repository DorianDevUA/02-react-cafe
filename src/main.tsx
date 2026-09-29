import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
// Нормалізація стилів
import 'modern-normalize';
// Глобальні стилі (додатково)
import './global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
