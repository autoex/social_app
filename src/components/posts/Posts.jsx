import React from 'react';
import './posts.scss';
import Post from '../Post/Post';

function Posts() {
  //TEMP
  const posts = [
    {
      id: 1,
      name: 'John Dohn',
      profilePic:
        'https://i.pinimg.com/236x/f8/24/34/f824342c879363f7d59ce96c8febbfc7.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis porta nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis dui eu arcu malesuada, id gravida nulla fermentum.',
      img: 'https://i.pinimg.com/236x/da/47/ef/da47efc2e8fa20a1383c325ecf689d74.jpg',
    },
    {
      id: 2,
      name: 'John Dohn',
      profilePic:
        'https://i.pinimg.com/236x/97/91/71/979171958dc41f6f6895df7c15820099.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis porta nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis dui eu arcu malesuada, id gravida nulla fermentum.',
    },
  ];
  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post
          {...post}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default Posts;
