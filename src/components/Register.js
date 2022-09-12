import React, { useState } from 'react';
import { registerUser } from '../api'  ;
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = ({setToken, navigate}) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async () => {
    const results = await registerUser(username, password);
    if (results.success) {
        setToken(results.data.token);
        window.localStorage.setItem('token', results.data.token);
        navigate('/profile');
    } else {
        console.log(results.error.message);
    }

 }

    return(
        <form onSubmit={(event) => {
          event.preventDefault();
            handleSubmit();
        }}>
            <TextField className='register'
                variant="outlined"
                type="text"
                label="Enter Username"
                onChange={(event) => setUsername(event.target.value)}
            />

            <TextField className='register'
            variant="outlined"
              type="password"
              label="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button id="register-submit" className='register' variant="contained" type="submit">Submit</Button>
        </form>
    )
}

export default Register;