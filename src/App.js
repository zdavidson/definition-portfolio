import './resources/normalize.css';
import './App.css';
import portfolio from './resources/images/portfolio.png';
import about from './resources/images/about.png';

function App() {
  return (
    <div className="App">
      <h1>Zoe Davidson</h1>
      <div class="firstPage">
        <div class="title">
          <h2 class="phonetic">Zo·ë Da·vid·son</h2>
            <h3 class="phonetic">/ˈzoʊ.i/ [dˈe͡ɪvɪdsən]</h3>
              <h4 class="noun">noun</h4>
                <p class="definition">a <a target="_blank"href="https://vimeo.com/zoedavidson/reel">filmmaker</a> and <a target="_blank" href="https://github.com/zdavidson">front-end developer</a> from Toronto, Canada</p>
        </div>
      </div>
      <div id="secondPage"class="secondPage">
        <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Who I Am</h3>
            <h4 class="bigTitle">Filmmaker + Front-End Web Developer</h4>
              <p class="description">Born and raised to Jamaican parents, in Canada, I've studied everything from arts to science. This portfolio is a collection of some of my best work across fields, and showcases my most recently polished skill: front-end development.</p>
        </div>
          <div class="pageLinks">
              <a class="sectionLink" href="#thirdPage">Websites</a>
              <a class="sectionLink" href="#fourthPage">Films</a>
              <a class="sectionLink" href="#fifthPage">Photography</a>
          </div>
      </div>
      <div id="thirdPage" class="thirdPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Website Design + Development</h4>
              <p class="description">I started using Dreamweaver when I was in elementary school. Since then, I've transitioned to a combination of VS Code, Photoshop and InDesign.</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"><a target="_blank" href="https://www.zoeahdavidson.com"><img src={portfolio}></img></a></div>
              <div class="content2"><a target="_blank" href="https://www.zoeahdavidson.com/zoe"><img src={about}></img></a></div>
          </div>
      </div>
      <div id="fourthPage"class="fourthPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Cinematography + Directing</h4>
              <p class="description">In 2019, I completed my MFA in Film at Howard University, specializing in Cinematography. I often shoot and/or direct projects as a freelancer, with friends, or as passion projects.</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"><iframe id="reel" src="https://player.vimeo.com/video/385727646" width="640" height="267" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
              <div class="content2"><iframe id="huffpostVid" src="https://player.vimeo.com/video/426612346" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
          </div>
      </div>
      <div id="fifthPage"class="fifthPage">
      <div class="whoWhatWhere clearfix">
          <h3 class="smallTitle">Things I Do</h3>
            <h4 class="bigTitle">Photography</h4>
              <p class="description">I've been a photographer for over a decade now, please enjoy a selection of some of my more recent work.</p>
        </div>
          <div class="contentHolder clearfix">
              <div class="content1"><a target="_blank" href="https://www.zoeahdavidson.com/washington-dc"><img src="https://images.squarespace-cdn.com/content/v1/5957d424b8a79b04a6f5af3e/1538507574454-4VS0HDVCGOFPAJNML3W1/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/4S3A4118.jpg?format=2500w"></img></a></div>
              <div class="content2"><a target="_blank" href="https://www.zoeahdavidson.com/nighttime/55soodpicoifkecuq2r5f4ulea9qrm"><img src="https://images.squarespace-cdn.com/content/v1/5957d424b8a79b04a6f5af3e/1559952147066-KT0OKWEZECY8RCCRM4ZZ/ke17ZwdGBToddI8pDm48kDONSgQXwBYB20AZSG99sXx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXaanQ4b7g0mjR1pPNaLl5krdG6DE4mXhsDJSK2uJyqajoA/4S3A9750.jpg?format=2500w"></img></a></div>
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
              <p class="descriptionLeft">I respond to all requests within 48 hours during the week. All quotes are in line with current market rates, and are based on time, skillset, and the scope of work required for the given project.</p>
         
          </div>
            <form action="https://formspree.io/f/xwkwwnlr" method="POST" class="contactForm">
              <input type="text" placeholder="Name" name="name" required></input>
              <input type="email" placeholder="Email" name="email" required></input>
              <input type="tel" placeholder="Phone" name="phone"></input>
              <input type="text" placeholder="Budget" name="budget"></input>
              <input type="text" placeholder="Deadline" name="deadline"></input>
              <input type="text" placeholder="Description" name="description" required></input>
              <input class="submitButton" type="submit" value="Get a Quote" name="submit"></input>
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
