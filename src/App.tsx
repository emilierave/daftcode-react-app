// @ts-ignore
import logo from "./DSC00202-copy.svg";
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
          Give a name to an abstract woman above
        </p>
        <button onClick={dialogAlert}>Give Me a hint</button>
        <button onClick={dialogAlert2}>Any hint, please</button>
        <InputForm/>
        <a
            className="App-link"
            href="https://github.com/emilierave/daftcode-react-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          link to git repo
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
  );
}

export default App;
