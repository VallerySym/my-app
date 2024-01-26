import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <a  href="#">
                <img  src="https://w7.pngwing.com/pngs/472/337/png-transparent-computer-icons-logo-svg-triangle-logo-black-thumbnail.png" />
            </a>
        </div>
    );
}

export default Header;
