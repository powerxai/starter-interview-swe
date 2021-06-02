import React from 'react';
// import logo from '../public/logo512.png';
import { Note } from './components/note';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo512.png" className="App-logo" alt="logo" />
        <Note />
      </header>
    </div>
  );
}

export default App;
