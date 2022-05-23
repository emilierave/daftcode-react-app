import logo from './DSC00202-copy.svg';
import React from 'react';
import InputForm from "./home";
import './App.css';

function App() {
  const dialogAlert = () => {
    alert('There is no hint in here')
  }
  const dialogAlert2 = () => {
    alert('There is no good or bad name, it is just a name, do not worry')
  }
  return (
      <main>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={dialogAlert}>Open alert</button>
        <a
            className="App-link"
            href="https://github.com/emilierave/daftcode-react-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          test-react-project
        </a>
        <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Edge_cover"
            target="_blank"
            rel="noopener noreferrer"
        >
          edge cover
        </a>
      </header>
    </div>
  </main>
  )
  return;
}

export default App;
