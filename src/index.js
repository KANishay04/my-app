import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme'; // Предположим, что ваш провайдер контекста называется ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> {/* Оборачиваем ваш компонент App в провайдер контекста */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
