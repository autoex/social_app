import React from 'react';
import './user.scss';

const User = ({isOnline}) => {
  return (
    <div className='user'>
      {isOnline && <div className='online' />}
      <img
        src='https://images4.alphacoders.com/101/thumbbig-1012591.webp'
        alt='User'
      />
      <span>John Smith</span>
    </div>
  );
};

export default User;
