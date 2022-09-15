import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import {
    Navbar,
    Posts,
    Profile, 
    Home,
    Login,
    Register,
    CreatePost, 
    SinglePostView,
    EditPost
} from './components'

import './style.css'; 

import {
    getPosts,
    getUserDetails
} from './api';


const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    

 function logout (){
    window.localStorage.removeItem('token'); 
    setToken('')
    setUser({});
 }

async function fetchPosts(){
    const results = await getPosts(token)
    setPosts(results.data.posts);
}

async function getMe(){
  const storedToken = window.localStorage.getItem('token');
  if (!token) {
    setToken(storedToken);
    return;
  }
  const results = await getUserDetails(token);
  if(results.success) {
    setUser(results.data);
  } else {
    console.log(results.error.message);
  } 
}

useEffect(() => {
    fetchPosts()
}, [token])

useEffect (() => {
 getMe()
}, [token])

    return (
        
        <div>
            <Navbar logout={logout} token={token}/>  
            <Routes>
              <Route path="/" element={<Home token={token}/>} />
              <Route path="/posts" element={<Posts posts={posts} navigate={navigate} token={token}/>} />
              <Route path="/profile" element={<Profile user={user}/>} />
              <Route path='/register' element={<Register setToken={setToken} token={token} navigate={navigate}/>} />
              <Route path='/login' element={<Login setToken={setToken} token={token} navigate={navigate}/>} />
              <Route exact path='/posts/create' element={<CreatePost navigate={navigate} token={token} fetchPosts={fetchPosts}/>}/>
              <Route path='/posts/:postID' element={<SinglePostView posts={posts} token={token} getMe={getMe}/>}/> 
              <Route exact path='/posts/edit-post/:postID' element={<EditPost posts={posts} token={token} fetchPosts={fetchPosts} navigate={navigate}/>}/>
            </Routes>
        </div>
    )
}

const container = document.querySelector('#app');

const root = ReactDOM.createRoot(container);

root.render(
<CssBaseline>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</CssBaseline>
);

/*
Navbar
Registration
Login
Posts
Profile
AddPost
*/