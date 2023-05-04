import React from 'react';
import "./NavBar.scss"

function NavBar(props) {
    return (
        <div className='navBar'>
            <ul className='navBar-list'>
                <a className='navBar-list-link' href='/'>
                    <li className="navBar-list-item">Home</li>
                </a>
                <a className='navBar-list-link'>
                    <li className="navBar-list-item">Contact</li>
                </a>
                <a className='navBar-list-link'>
                    <li className="navBar-list-item">Resume</li>
                </a>
                <a className='navBar-list-link'>
                    <li className="navBar-list-item">Portfolio</li>
                </a>
            </ul>
        </div>
    );
}

export default NavBar;