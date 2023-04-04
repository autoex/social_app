import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../leftBar/leftBar';
import Nav from '../nav/Nav';
import RightBar from '../rightBar/RightBar';
import { DarkModeContext } from '../../context/darkModeContext';

const Layout = () => {
  const {darkMode} = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <div className='app'>
        <Nav />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
