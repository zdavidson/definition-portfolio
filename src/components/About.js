import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="secondPage"class="secondPage">
                <div class="whoWhatWhere clearfix">
                <h3 class="smallTitle">Who I Am</h3>
                    <h4 class="bigTitle">Filmmaker + Front-End Web Developer</h4>
                    <p class="description">Born in Canada, raised by Jamaican parents. I've studied everything from arts to science. This portfolio is a collection of some of my best work across fields, and in the build of the site itself, showcases my most recently polished skill: front-end development.</p>
                </div>
                <div class="pageLinks">
                    <a class="sectionLink" href="#thirdPage">Websites</a>
                    <a class="sectionLink" rel="noreferrer" target="_blank" href="https://www.zoeahdavidson.com/film">Films</a>
                    {/*<a class="sectionLink" href="#fifthPage">Photography</a>*/}
                </div>
            </div>
    )
}

export default About;
