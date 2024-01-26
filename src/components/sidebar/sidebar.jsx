import React from 'react';
import classes from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav>
                <ul className={classes.list}>
                    <li><a className={classes.link} href=''>Profile</a></li>
                    <li><a className={classes.link} href=''>Message</a></li>
                    <li><a className={classes.link} href=''>News</a></li>
                    <li><a className={classes.link} href=''>Music</a></li>
                    <li><a className={classes.link} href=''>Settings</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Sidebar;
