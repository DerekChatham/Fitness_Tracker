import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { callApi } from '../api';


const LoginPage = ({ action, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = action === 'login';
  console.log('ACTION: ', action);
  const title = isLogin ? 'Login' : 'Register';

  const oppositeTitle = isLogin ? 'New User?' : 'Already have an account?';
  const oppositeAction = isLogin ? 'register' : 'login';
  console.log('OPPOSITE: ', oppositeAction);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await callApi({
      url: `/users/${action}`,
      body: { username, password },
      method: 'POST',
    });
    const token = data?.token;
    console.log('TOKEN: ', token);
    if (token) {
      localStorage.setItem('token', token);
      setUsername('');
      setPassword('');
      setToken(token);
      history.push('/profile');
    }
  };

  return (
    <>
      <div className='loginpage'>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='username'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <br />
          <button>
            {title}
            </button>
        </form>
        <Link to={`/${oppositeAction}`}>{oppositeTitle}</Link>
        </div>
    </>
  );
};

export default LoginPage;