import React, { useContext } from 'react';
import './comments.scss'
import Comment from '../comment/Comment';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
    const {currentUser} = useContext(AuthContext)
  const comments = [
    {
      id: 1,
      userId: 1,
      name: 'John Dohn',
      profilePic:
        'https://i.pinimg.com/236x/97/91/71/979171958dc41f6f6895df7c15820099.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis porta nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis dui eu arcu malesuada, id gravida nulla fermentum.',
    },
    {
      id: 2,
      userId: 2,
      name: 'John Dohn',
      profilePic:
        'https://i.pinimg.com/236x/97/91/71/979171958dc41f6f6895df7c15820099.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis porta nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis dui eu arcu malesuada, id gravida nulla fermentum.',
    },
  ];
  return <div className='comments'>
    <div className="write">
        <img src={currentUser.img} alt="ava" />
        <input type="text" placeholder='Write a comment' />
        <button>Send</button>

    </div>


    {comments.map(comm=><Comment key={comm.id} {...comm} />)}
  </div>;
};

export default Comments;
