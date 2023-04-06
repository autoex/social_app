import React, { useState } from 'react';
import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Post = ({ name, profilePic, desc, img, id }) => {
  const [parent] = useAutoAnimate();
  const liked = false;
  const [shownComments, setShownComments] = useState(false);
  const toggleComments = () => setShownComments((prev) => !prev);
  return (
    <div className='post'>
      <div className='container' ref={parent}>
        <div className='user'>
          <div className='userInfo'>
            <img
              src={profilePic}
              alt='user img'
            />
            <div className='details'>
              <Link
                to='/profile/id'
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className='name'>{name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className='content'>
          <p>{desc}</p>
          {img && (
            <img
              src={img}
              alt='img'
            />
          )}
        </div>
        <div className='info'>
          <div className='item'>
            {liked ? (
              <FavoriteOutlinedIcon htmlColor={'red'} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            12 likes
          </div>
          <div
            className='item'
            onClick={toggleComments}>
            <TextsmsOutlinedIcon />
            12 coments
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
          </div>
        </div>
        {shownComments && <Comments />}
      </div>
    </div>
  );
};

export default Post;
