import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';

import { AuthProvider } from './context/authContext';
import { DarkModeProvider } from './context/darkModeContext';
import router from './tools/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
