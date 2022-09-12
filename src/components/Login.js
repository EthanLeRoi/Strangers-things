import React, { useState } from 'react';
import { userLogin } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = ({setToken, navigate}) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = async () => {
    const results = await userLogin(username, password);
    if (results.success) {
        setToken(results.data.token);
        window.localStorage.setItem('token', results.data.token);
        navigate('/profile');
    } else {
        console.log(results.error.message);
    }

 }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
              handleLogin();
          }}>
              <TextField id="login-user"
                  className='login'
                  variant='outlined'
                  type="text"
                  placeholder="Enter Username"
                  onChange={(event) => setUsername(event.target.value)}
              />
  
              <TextField id="login-pass"
                className='login'
                variant='outlined'
                type="password"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button id="login-submit" className='login' variant='contained' type="submit">Submit</Button>
        </form>      
    )
}

export default Login;