import React from 'react';
import './profile.scss';
import Posts from '../../components/posts/Posts';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
  return (
    <>
      <div className='images'>
        <img
          className='cover'
          src='https://i.pinimg.com/236x/bc/8c/03/bc8c03ba12f286713f826efc3b908e0f.jpg'
          alt=''
        />
        <img
          className='profile'
          src='https://i.pinimg.com/236x/7c/be/8a/7cbe8af3689644696c6156871a2bc57d.jpg'
          alt=''
        />
      </div>
      <div className='profile'>
        <div className='profileContainer'>
          <div className='uInfo'>
            <div className='left'>
              <a href=''>
                <FacebookTwoToneIcon fontSize='large' />
              </a>
              <a href=''>
                <InstagramIcon fontSize='large' />
              </a>
              <a href=''>
                <TwitterIcon fontSize='large' />
              </a>
              <a href=''>
                <LinkedInIcon fontSize='large' />
              </a>
              <a href=''>
                <PinterestIcon fontSize='large' />
              </a>
            </div>
            <div className='center'>
              <span>Jae Do</span>
              <div className='info'>
                <div className='item'>
                  <PlaceIcon />
                  <span>USA</span>
                </div>
                <div className='item'>
                  <LanguageIcon />
                  <span>ldev.dev</span>
                </div>
              </div>
              <button>Follow</button>
            </div>
            <div className='right'>
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </>
  );
};

export default Profile;
