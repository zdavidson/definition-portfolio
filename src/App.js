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
        <div class="who clearfix">
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

      </div>
    </div>
  );
}

export default App;
