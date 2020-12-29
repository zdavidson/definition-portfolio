import './resources/normalize.css';
import './App.css';

// Import Components
import Homepage from './components/Homepage';

import About from './components/About';
import Web from './components/Web';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <h1>Zoe Davidson</h1>
      <Homepage id="homepage"/>
 
      <About />
      <Web />
      {/*<Film />*/}
      {/*<Photography />*/}
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
