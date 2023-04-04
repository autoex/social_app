import React from 'react';
import './rightBar.scss';
import User from '../user/User';

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestion for you</span>
          <div className='userBlock'>
            <div className='userInfo'>
              <User />
            </div>
            <div className='userButtons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='userBlock'>
            <div className='userInfo'>
              <User />
            </div>
            <div className='userButtons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Latest activities</span>
          <div className='userBlock'>
            <div className='userInfo'>
              <User />
            </div>
            <div className='userDetails'>
              <p>Change picture</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className='userBlock'>
            <div className='userInfo'>
              <User />
            </div>
            <div className='userDetails'>
              <p>Change picture</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className='userBlock'>
            <div className='userInfo'>
              <User />
            </div>
            <div className='userDetails'>
              <p>Change picture</p>
              <span>1 min ago</span>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Online users</span>
          <div className='userBlock'>
            <div className='userInfo'>
              <User isOnline />
            </div>
          </div>
          <div className='userBlock'>
            <div className='userInfo'>
              <User isOnline />
            </div>
          </div>
          <div className='userBlock'>
            <div className='userInfo'>
              <User isOnline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
