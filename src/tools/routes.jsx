import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';

import { useContext } from 'react';
import Layout from '../components/layout/Layout';
import { AuthContext } from '../context/authContext';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';
import Register from '../pages/register/Register';



const ProtectedRoutes = ({ children }) => {
  const {currentUser} = useContext(AuthContext)
  if (!currentUser) return <Navigate to='/login' />;
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
