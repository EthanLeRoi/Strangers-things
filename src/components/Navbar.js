import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const Navbar = ({logout, token}) => {
    return (
        <header>
            <nav id="main-nav">
                <Paper elevation = {6}>
                        <ButtonGroup variant='contained'>
                            <Button size="large"><Link to='/' >Home</Link></Button>
                            <Button size="large"><Link to='/posts' >Posts</Link></Button>
                            <Button size="large"><Link to='/profile' >Profile</Link></Button>
                        </ButtonGroup>
                {
                    token ? (
                        <Typography align ='right'>    
                            <Button size="large" className='nav-right' variant='contained'><Link to='/' onClick={() => {logout(); }}>Logout</Link></Button>
                        </Typography>    
                    ) : (
                        <>
                            <Typography align ='right'>
                                <ButtonGroup variant='contained'>
                                    <Button size="large"><Link className='nav-right' to='/register'>Register</Link></Button>
                                    <Button size="large"><Link className='nav-right' to='/login'>Login</Link></Button>
                                </ButtonGroup>
                            </Typography>    
                        </>
                    )
                }                    
                </Paper>    
            </nav>
        </header>
    )
};

export default Navbar