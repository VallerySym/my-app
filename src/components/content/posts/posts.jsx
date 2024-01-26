import React from 'react';
import classes from './posts.module.css';
import Post from './post/post';


const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div className={classes.wrapper} >
                <textarea className={classes.input} />
                <button>Add post</button>
            </div>
            <Post message = "Hello, world!"/>
            <Post message = "How are you!"/>
        </div>
    );
}

export default Posts;
