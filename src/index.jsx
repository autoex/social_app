import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';

import router from './tools/routes';
import { DarkModeContext, DarkModeProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
