
import React from 'react';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

const Profile = ({user}) => {
    const messages = user.messages;
    const userID = user._id;
    return (
        <div>
            <div>
                <h1>Messages to Me</h1>
            
        {
            messages && messages.map(message => {
                const fromUserID = message.fromUser._id;
                const {username} = message.fromUser;
                const {title} = message.post;
                if (userID !== fromUserID) {
                return(
                <Paper elevation={24} className="profile-msg">
                    <div key={message._id}>
                            <p>From: {username}</p>
                            <p>Post: {title}</p>
                            <p>Message: {message.content}</p>
                    </div>
                </Paper>
                )
              }
            })
        }
            </div>

            <div>
                <h1>Your sent Messages</h1>
            
        {
            messages && messages.map(message => {
                const fromUserID = message.fromUser._id;
                const {title} = message.post;
                if (userID === fromUserID) {
                return(
                    <div key={message._id}>
                            <Paper elevation={24} className="profile-msg">
                                <p>(From Me)</p>
                                <p>Post: {title}</p>
                                <p>Message: {message.content}</p>
                            </Paper>
                        </div>
                )
              }
            })
        }
            </div>
        </div>
    )
}

export default Profile;