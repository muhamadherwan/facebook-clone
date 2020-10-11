import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    // set input HOOK
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // form submit action
    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
        setImageUrl("");
    };

    return (
        <div className='messageSender'>
            
            <div className="messageSender__top">
                <Avatar src='https://avatars3.githubusercontent.com/u/59008066?s=460&u=d0a1e975222cbcbea2af851d300cd1fbf0110563&v=4'/>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}    
                        className="messageSender__input"
                        placeholder={`What's on your mind?`} 
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}    
                        placeholder={`image URL (Optional)`} />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>        

            </div>       
        </div>
    )
}

export default MessageSender;

