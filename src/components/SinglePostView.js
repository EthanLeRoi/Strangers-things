import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { postMessage } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

const SendMessage = ({postID, token, getMe}) => {
    const[message, setMessage]= useState({content: ''});

    async function addMessage() {
        await postMessage({postID, message, token})
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            addMessage();
            getMe();
        }}>
            <TextField
            variant='outlined'
            type='text'
            placeholder="Enter Message"
            onChange={(event) => setMessage({content: event.target.value})}
            />
            <Button variant='contained' type='submit'>Send </Button>
        </form>
    )
}

const SinglePostView = ({posts, token, getMe}) => {
    const[activateMessage, setActivateMessage]= useState(false);
    const { postID } = useParams();

    const [currentPost] = posts.filter(post => post._id === postID); 
    const {title, description, location, price, willDeliver} = currentPost;           

    return (
        <div>
            <div>
                <Card>
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
                <p>Will Deliver: {willDeliver}</p>
                </Card>
            </div>      
            <Button variant='contained' onClick={() => setActivateMessage(!activateMessage)}>Message Seller</Button>  
            {
                activateMessage && <SendMessage postID={postID} token={token} getMe={getMe}/>
            }
        </div>
    )
}

export default SinglePostView;