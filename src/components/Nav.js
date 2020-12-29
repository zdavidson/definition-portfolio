import React from 'react';
import './Nav.css';

const Nav = () => {
    return(
        <div class="nav">
            <div class="hamburger">
                <span class="line line1"></span>
                <span class="line line2"></span>
            </div>
            <div id="menu">
                <h3>Menu</h3>
                    <ul>
                        <li><a href="#secondPage">Who I Am</a></li>
                        <li><a href="#thirdPage">Things I Do</a></li>
                        <li><a href="#seventhPage">Talk To Me</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default Nav;