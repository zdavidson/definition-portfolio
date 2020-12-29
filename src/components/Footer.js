import React from 'react';

const Footer = () => {
    return (
        <div class="eigthPage clearfix">
        <div class="whoWhatWhere">
            <h4 class="bigTitle footer bottom">Contact</h4>
            <div class="info">
              <p class="left footer">zoe.a.h.davidson@gmail.com</p>
              <p class="left footer">+1 (440) 453 1744</p>
              <a href="www.linkedin.com/zoëdavidson"><p class= "left footer">LinkedIn</p></a>
              <a href="www.github.com/zdavidson"><p class= "left footer">GitHub</p></a>
            </div>
            <div>
              <h5 class="left cv"><a rel="noreferrer" href="firstPage" class="noUnderline"><span>{"{ "}</span>Download My CV<span>{" }"}</span></a></h5>
            </div>
            <p class="arrow right top"><a class="noUnderline" href="firstPage">↑</a></p>
        </div>
      </div>
    )
}

export default Footer;