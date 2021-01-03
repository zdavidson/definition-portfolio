import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="eigthPage clearfix">
        <div class="whoWhatWhere">
            <h4 class="bigTitle footer bottom">Contact</h4>
            <div class="info">
              <p class="left footer">zoe.a.h.davidson@gmail.com</p>
              <p class="left footer">+1 (440) 453 1744</p>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/zo%C3%ABdavidson/"><p class= "left footer">LinkedIn</p></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/zdavidson"><p class= "left footer">GitHub</p></a>
            </div>
            <div>
              <h5 class="left cv"><a rel="noreferrer" target="_blank" href="https://www.canva.com/design/DAER7CCTt50/0Ecv7CzoAHPU8MMj6ImSkQ/view?utm_campaign=designshare&utm_content=DAER7CCTt50&utm_medium=link&utm_source=sharebutton" class="noUnderline"><span>{"{ "}</span>Download My CV<span>{" }"}</span></a></h5>
            </div>
            <p class="arrow right top"><a class="noUnderline" href="firstPage">↑</a></p>
        </div>
      </div>
    )
}

export default Footer;