import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Demos from './components/Demos';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo"> </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#demos">Demos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Demos />
        <Contact />
      </main>
    </div>
  );
}

export default App;