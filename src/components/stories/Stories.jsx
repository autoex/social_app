import React, { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

function Stories() {
    const {currentUser} = useContext(AuthContext)
  //TEMP
  const stories = [
    {
      id: 1,
      name: 'Jonh Dohn',
      img: 'https://i.pinimg.com/236x/c8/11/11/c811119d6d78b1e20aed82a14613f282.jpg',
    },
    {
      id: 2,
      name: 'Jonh Dohn',
      img: 'https://i.pinimg.com/236x/c8/11/11/c811119d6d78b1e20aed82a14613f282.jpg',
    },
    {
      id: 3,
      name: 'Jonh Dohn',
      img: 'https://i.pinimg.com/236x/c8/11/11/c811119d6d78b1e20aed82a14613f282.jpg',
    },
    {
      id: 4,
      name: 'Jonh Dohn',
      img: 'https://i.pinimg.com/236x/c8/11/11/c811119d6d78b1e20aed82a14613f282.jpg',
    },
    {
      id: 5,
      name: 'Jonh Dohn',
      img: 'https://i.pinimg.com/236x/c8/11/11/c811119d6d78b1e20aed82a14613f282.jpg',
    },
  ];
  console.log(currentUser)
  return (
    <div className='stories'>
        <div className='story'>
            <img src={currentUser.img} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map((itm) => (
        <div
          key={itm.id}
          className='story'>
          <img
            src={itm.img}
            alt=''
          />
          <span>{itm.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
