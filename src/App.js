import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Login} from './components/Login'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} width="150" height="150" className="App-logo" alt="logo" />
      </header>
      <Header title="React SPA Project"/>
      <Dashboard />
      <Login portal="Verizon"/>
      <Footer year="@2019"/>
    </div>
  );
}
export default App;
