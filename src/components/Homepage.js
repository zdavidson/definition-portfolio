import React from 'react';
import './Homepage.css';
import image from '../resources/images/name.svg';
import './Name.css';
import './animate.css';
import Email from './Email';
import Nav from './Nav';

const Homepage = () => {

return (
        <div class="firstPage">
                <Nav />
                <div class="title">
                {/*<img src={image} />*/}
                <h2 class="phonetic">Zo<span class="dot">·</span>ë Da<span class="dot">·</span>vid<span class="dot">·</span>son</h2>
                    <h3 class="phonetic">/ˈzoʊ.i/ [dˈe͡ɪvɪdsən]</h3>
                    <h4 class="noun">noun</h4>
                        <p class="definition">a <a target="_blank"href="https://vimeo.com/zoedavidson/reel">filmmaker</a> and <a target="_blank" href="https://github.com/zdavidson">front-end developer</a> from Toronto, Canada</p>
                </div>
                <Email />
        </div>
    )
}

export default Homepage;