import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
        <input type="checkbox" id="active"></input>
        <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
            <ul class="menu">
                <li><a href="firstpage">Home</a></li>
                <li><a href="#secondPage">About</a></li>
                <li><a href="#thirdPage">Web Development</a></li>
                <li><a href="#seventhPage">Contact</a></li>
            </ul>
        </div>
        </>
    )
}


export default NavBar;