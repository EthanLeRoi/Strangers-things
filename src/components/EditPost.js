import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { updatePost } from '../api';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const EditPost = ({posts, token, fetchPosts, navigate}) => {
    const { postID } = useParams();
    const [currentPost] = posts.filter(post => post._id === postID); 
    const {title, description, location, price, willDeliver} = currentPost;
    
    const[newTitle, setNewTitle] = useState(title);
    const[newDescription, setNewDescription]= useState(description);
    const[newLocation, setNewLocation]=useState(location);
    const[newPrice, setNewPrice]=useState(price);
    const[newWillDeliver, setNewWillDeliver]=useState(willDeliver);

    async function editPost() {
        const updatedPost={
            token: token,
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            _id: postID
        }
        await updatePost(updatedPost);
        fetchPosts();
    }
    
    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            editPost();
            navigate('/posts');
        }}>
            <TextField 
            variant='outlined'
            type='text'
            placeholder={title}
            onChange={(event)=> setNewTitle(event.target.value)} 
            />
            <TextField 
            variant='outlined'
            type='text'
            placeholder={description}
            onChange={(event)=> setNewDescription(event.target.value)} 
            />
            <TextField
            variant='outlined'
            type='text'
            placeholder={location}
            onChange={(event)=> setNewLocation(event.target.value)} 
            />
            <TextField
            variant='outlined'
            type='text'
            placeholder={price}
            onChange={(event)=> setNewPrice(event.target.value)} 
            />
            <FormControlLabel control={<Checkbox type='checkbox'
            color="success"
            checked={newWillDeliver}
            onChange={(event)=> setNewWillDeliver(event.target.checked)} 
            />} label="Self Deliver?"/>
            <Button variant="contained" type="submit">Edit Post</Button>
        </form>
    )
};

export default EditPost;