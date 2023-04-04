import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h2>Register</h2>
          <form>
            <input
              type='text'
              placeholder='Username'
            />
            <input
              type='text'
              placeholder='Email'
            />
            <input
              type='password'
              placeholder='Password'
            />
            <input
              type='text'
              placeholder='Name'
            />
            <button>Register</button>
          </form>
        </div>
        <div className='right'>
          <h1>Social Dudes.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dolorum consequatur accusantium molestiae impedit ad suscipit in
            incidunt assumenda minima!
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
