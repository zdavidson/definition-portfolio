import React from 'react';
import './Web.css';
import portfolio from '../resources/images/portfolio.png';
import about from '../resources/images/about.png';

const Web = () => {
    return (
        <div id="thirdPage" class="thirdPage">
            <div class="whoWhatWhere clearfix">
                <h3 class="smallTitle">Things I Do</h3>
                    <h4 class="bigTitle">Website Design + Development</h4>
                    <p class="description">I started using Dreamweaver when I was in elementary school. Since then, I've transitioned to a combination of VS Code, Photoshop and InDesign.</p>
            </div>
          <div class="contentHolder clearfix">
              <div class="content1"><a rel="noreferrer" target="_blank" href="https://www.zoeahdavidson.com"><img class="reel" alt="" src={portfolio}></img></a></div>
              <div class="content2"><a rel="noreferrer" target="_blank" href="https://www.zoeahdavidson.com/zoe"><img class="" alt="" src={about}></img></a></div>
          </div>
      </div>
    )
}

export default Web;