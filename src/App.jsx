import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Route, Routes } from 'react-router-dom';
import './style.scss';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}>
        <Route
          path='home'
          element={<Home />}
        />
        <Route
          path='profile'
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
}

export default App;
