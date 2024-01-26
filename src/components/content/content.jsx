import React from 'react';
import classes from './content.module.css';
import Posts from './posts/posts';

const Content = () => {
    return (
        <div className={classes.content}>
            <Posts />
        </div>
    );
}

export default Content;
