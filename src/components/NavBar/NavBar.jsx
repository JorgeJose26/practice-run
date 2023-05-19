import React from 'react';
import "./NavBar.scss"

function NavBar(props) {
    return (
        <div className='navBar'>
            <ul className='navBar-list'>
                <a className='navBar-list-link' href='/'>
                    <li className="navBar-list-item">Home</li>
                </a>
            </ul>
        </div>
    );
}

export default NavBar;