import React from 'react';
import './comment.scss';

const Comment = ({ profilePic, desc, name }) => {
  return (
    <div className='comment'>
      <img
        src={profilePic}
        alt='ava'
      />
      <div className='info'>
        <span>{name}</span>
        <p>{desc}</p>
      </div>
      <span className='date'>1 hoar ago</span>
    </div>
  );
};

export default Comment;
