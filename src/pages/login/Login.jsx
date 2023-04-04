import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello Dudes.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dolorum consequatur accusantium molestiae impedit ad suscipit in
            incidunt assumenda minima!
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            {' '}
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h2>Login</h2>
          <form>
            <input
              type='text'
              placeholder='Username'
            />
            <input
              type='password'
              placeholder='Password'
            />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
