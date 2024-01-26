import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src ="https://imgflip.com/s/meme/Smiling-Cat.jpg"/>
            <p>{props.message}</p>
            <span>Like</span>
        </div>
    );
}

export default Post;
