import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './nav.scss';
import User from '../user/User';
import { DarkModeContext } from '../../context/darkModeContext';

const Nav = () => {
  const { darkMode, themeToggle } = useContext(DarkModeContext);
  return (
    <nav>
      <div className='nav__left'>
        <Link to='/'>
          <span className='logo'>Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <LightModeOutlinedIcon onClick={themeToggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={themeToggle} />
        )}
        <AppsOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input
            type='text'
            placeholder='Search'
          />
        </div>
      </div>
      <div className='nav__right'>
        <PersonOutlineOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <User />
      </div>
    </nav>
  );
};

export default Nav;
