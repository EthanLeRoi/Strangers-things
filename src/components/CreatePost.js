import React, {useState} from 'react';
import { createPost } from '../api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const CreatePost = ({token, navigate, fetchPosts}) => {
    const[title, setTitle]= useState('');
    const[description, setDescription]=useState('');
    const[price, setPrice]=useState('');
    const[location, setLocation]=useState('');
    const[willDeliver, setWillDeliver]=useState(false);

    const newPost = {
        title,
        description,
        price,
        location,
        willDeliver
    }

    async function addPost() {
        const results = await createPost(token, newPost);
        fetchPosts();
        navigate('/posts');
    }

    return(
    <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
    }}>
        <TextField
          variant='outlined'
          type="text"
          label="Title"
          onChange={(event) => setTitle(event.target.value)}  
        />
        <TextField
          variant='outlined'
          type="text"
          label="Description" 
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          variant='outlined'
          type="text"
          label="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          variant='outlined'
          type="text"
          label="Location"
          onChange={(event) => setLocation(event.target.value)}
        />
        <FormControlLabel control={<Checkbox type='checkbox'
            color='success'
            checked={willDeliver}
            onChange={(event)=> setWillDeliver(event.target.checked)}
        />}  label="Self Deliver?"/>
        <Button variant="contained" type="submit">Create Post</Button>
    </form>
    )
}

export default CreatePost;