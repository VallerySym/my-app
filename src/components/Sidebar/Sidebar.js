import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul className="Sidebar-list">
                    <li><a className="Sidebar-list_link" href=''>Profile</a></li>
                    <li><a className="Sidebar-list_link" href=''>Message</a></li>
                    <li><a className="Sidebar-list_link" href=''>News</a></li>
                    <li><a className="Sidebar-list_link" href=''>Music</a></li>
                    <li><a className="Sidebar-list_link" href=''>Settings</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Sidebar;
