import logo from './DSC00202-copy.svg';
import React from 'react';
import InputForm from "./home";
import './App.css';

function App() {
  const dialogAlert = () => {
    alert('hello react')
  }
  return (
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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
