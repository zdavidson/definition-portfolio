import React from 'react';

const Film = () => {
    return (
        <div id="fourthPage"class="fourthPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Cinematography + Directing</h4>
              <p class="description">In 2019, I completed my MFA in Film at Howard University, specializing in Cinematography. I often shoot and/or direct projects as a freelancer, with friends, or as passion projects.</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"><iframe title="reel" id="reel" src="https://player.vimeo.com/video/385727646" width="640" height="267" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
              <div class="content2"><iframe title="huffpostVid" id="huffpostVid" src="https://player.vimeo.com/video/426612346" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
          </div>
      </div>
    )
}

export default Film;