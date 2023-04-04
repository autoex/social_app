import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.scss';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();

    login({ name: e.target.username.value, password: e.target.password.value });
  };
  if (currentUser) return <Navigate to='/' />;
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
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h2>Login</h2>
          <form onSubmit={formHandler}>
            <input
              type='text'
              placeholder='Username'
              name='username'
            />
            <input
              type='password'
              name='password'
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
