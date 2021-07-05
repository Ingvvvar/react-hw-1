import logo, { ReactComponent } from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';
import React from 'react';
import NewParagraph from './NewParagraph';

const Rimg = () => {
  return (
    <img src={logo2} className="App-logo2" alt="logo2" />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to ReloaD.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <Rimg />
        <NewParagraph />
      </header>

    </div>
  );
}

export default App;
