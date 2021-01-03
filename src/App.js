import React from 'react';

// Import Components
import Homepage from './components/Header/Homepage';
import About from './components/About';
import Web from './components/Web';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

//Import CSS
import './resources/normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Zoe Davidson</h1>
      <Homepage id="homepage"/>
      <About />
      <Web />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
