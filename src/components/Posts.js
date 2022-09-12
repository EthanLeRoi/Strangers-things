import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

const Posts = ({posts, navigate, token}) => {

    const[searchTerm, setSearchTerm] = useState('');
    
    function postMatches(post, string) {
        const {description, title} = post;

        if((title.toLowerCase().includes(string.toLowerCase())) || description.toLowerCase().includes(string.toLowerCase())) {
            return post;
        }
      }
      
      const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
      const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <h1>Posts</h1>           
            <div id="post-nav">
                    <TextField id="search-bar"variant='outlined' placeholder='Search' type='text' onChange={(event) => setSearchTerm(event.target.value)}/>  
                    <Button id="navigate-create" variant="contained" type="submit" onClick={() => navigate('/posts/create')}>Add Post</Button>   
            </div>
            <div id='outer div element'>
                {
                    postsToDisplay.map((post) => {
                    const {description, location, price, title, _id, isAuthor} = post;
                    return (
                    <div key={_id}>
                        <Card id="card">
                            <h3>{title}</h3>
                            <p>Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                        {
                            isAuthor ? (
                                <>
                                <ButtonGroup variant="contained">
                                    <Button className="post-buttons"><Link to={`/posts/edit-post/${_id}`}>Edit</Link></Button>
                                    <Button className="post-buttons" onClick={()=> deletePost(token, _id)}>Delete</Button>
                                </ButtonGroup>
                                </>
                            ) : (
                                <Button className="post-buttons" variant="contained"><Link to={`/posts/${_id}`}>View</Link></Button>
                                )
                            }
                        </Card>
                    </div>
                        )
                    })
                }
            </div>
        </form>
    )
}

export default Posts;