import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

const Home = ({token}) => {
    return(     
        <div>
            <h1 id="site-title">Stranger's Things</h1>
            <p id='site-desc'>Sell all of your things to strangers!</p>
            {
            token ? (
                        <Typography align ='center'>
                            <Button style={{justifyContent: 'center'}} size='large' variant='contained'><Link to='/' onClick={() => {logout(); }}>Logout</Link></Button>
                        </Typography>
                    ) : (
                        <>
                            <Typography align ='center'>
                                <ButtonGroup style={{justifyContent: 'center '}} variant='contained'>
                                    <Button size='large' className="home-nav"><Link  to='/register'>Register</Link></Button>
                                    <Button size='large' className="home-nav"><Link to='/login'>Login</Link></Button>
                                </ButtonGroup>
                            </Typography>    
                        </>
                    )
                    }        
        </div>    
    )
}

export default Home