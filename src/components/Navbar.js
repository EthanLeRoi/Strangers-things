import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';


const Navbar = ({logout, token}) => {
    return (
        <header>
            <nav id="main-nav">
                <Card>
                    <ButtonGroup variant='contained'>
                        <Button><Link to='/' >Home</Link></Button>
                        <Button><Link to='/posts' >Posts</Link></Button>
                        <Button><Link to='/profile' >Profile</Link></Button>
                    </ButtonGroup>
                {
                    token ? (
                        <Button className='nav-right' variant='contained'><Link to='/' onClick={() => {logout(); }}>Logout</Link></Button>

                    ) : (
                        <>
                            <ButtonGroup variant='contained'>
                                <Button><Link className='nav-right' to='/register'>Register</Link></Button>
                                <Button><Link className='nav-right' to='/login'>Login</Link></Button>
                            </ButtonGroup>
                        </>
                    )
                }
                </Card>    
            </nav>
        </header>
    )
};

export default Navbar