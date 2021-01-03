import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
        <input type="checkbox" id="active"></input>
        <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>
        </>
    )
}


export default NavBar;