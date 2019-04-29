import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Login} from './components/Login'
function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} width="150" height="150" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header title="React SPA Project"/>
      <Login portal="Verizon"/>
      <h1>Put your components here</h1>
      <Footer/>
    </div>
  );
}

export default App;
