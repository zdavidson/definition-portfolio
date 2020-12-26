import './resources/normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Zoe Davidson</h1>
      <div class="firstPage">
        <div class="title">
          <h2 class="phonetic">Zo·ë Da·vid·son</h2>
            <h3 class="phonetic">/ˈzoʊ.i/ [dˈe͡ɪvɪdsən]</h3>
              <h4 class="noun">noun</h4>
                <p class="definition">a filmmaker and front-end developer from Toronto, Canada</p>
        </div>
      </div>
      <div class="secondPage">
        <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Who I Am</h3>
            <h4 class="bigTitle">Filmmaker + Front-End Web Developer</h4>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
          <div class="pageLinks">
              <a class="sectionLink" href="#">Websites</a>
              <a class="sectionLink" href="#">Films</a>
              <a class="sectionLink" href="#">Photography</a>
          </div>
      </div>
      <div class="thirdPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Website Design + Development</h4>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"></div>
              <div class="content2"></div>
          </div>
      </div>
      <div class="fourthPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Cinematography + Directing</h4>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"></div>
              <div class="content2"></div>
          </div>
      </div>
      <div class="fifthPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Photography</h4>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"></div>
              <div class="content2"></div>
          </div>
      </div>
      <div class="sixthPage clearfix">
        <div class="whoWhatWhere">
          <div class="left">
            <h2 class="middleTitle">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h2>
                <h4 class="quotee">Name</h4>
                  <a class="sectionLink smallerLink" href="#">Go To Project</a>
                  </div>
          </div>
          <div class="right">
            <p class="arrow"><a class="noUnderline" href="#">→</a></p>
          </div>
      </div>
      <div class="seventhPage clearfix">
        <div class="whoWhatWhere">
         
          <h3 class="smallTitle">Talk To Me</h3>
            <h4 class="bigTitleBottom">Let's bring your project to life.</h4>
              <p class="descriptionLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
         
          </div>
            <form class="contactForm">
              <input type="text" placeholder="Name" ></input>
              <input type="email" placeholder="Email" ></input>
              <input type="tel" placeholder="Phone" ></input>
              <input type="text" placeholder="Budget" ></input>
              <input type="text" placeholder="Deadline" ></input>
              <input type="text" placeholder="Description" ></input>
              <input class="submitButton" type="submit" value="Get a Quote"></input>
            </form>
      </div>
      <div class="eigthPage clearfix">
        <div class="whoWhatWhere">
            <h4 class="bigTitle footer bottom">Contact</h4>
            <div class="info">
              <p class="left footer">zoe.a.h.davidson@gmail.com</p>
              <p class="left footer">+1 (440) 453 1744</p>
            </div>
            <p class="arrow right top"><a class="noUnderline" href="firstPage">↑</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
