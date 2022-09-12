
import React from 'react';
import Card from '@mui/material/Card';

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
                    <div key={message._id}>
                        <Card className="profile-msg">
                            <p>From: {username}</p>
                            <p>Post: {title}</p>
                            <p>Message: {message.content}</p>
                        </Card>
                    </div>
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
                            <Card className="profile-msg">
                                <p>(From Me)</p>
                                <p>Post: {title}</p>
                                <p>Message: {message.content}</p>
                            </Card>
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